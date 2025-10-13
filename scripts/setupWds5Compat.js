const modulePath = require.resolve('react-scripts/config/webpackDevServer.config');

const originalFactory = require(modulePath);

function patchedFactory(...args) {
  const config = originalFactory(...args);
  const before = config.onBeforeSetupMiddleware;
  const after = config.onAfterSetupMiddleware;

  if (Object.prototype.hasOwnProperty.call(config, 'https')) {
    const httpsConfig = config.https;
    if (httpsConfig) {
      const options = httpsConfig === true ? {} : httpsConfig;
      config.server = {
        ...(config.server || {}),
        type: 'https',
        options,
      };
    } else {
      config.server = {
        ...(config.server || {}),
        type: 'http',
      };
    }
    delete config.https;
  }

  if (before || after) {
    config.setupMiddlewares = (middlewares, devServer) => {
      if (before) {
        before(devServer);
      }
      if (after) {
        after(devServer);
      }
      return middlewares;
    };
    delete config.onBeforeSetupMiddleware;
    delete config.onAfterSetupMiddleware;
  }

  return config;
}

require.cache[modulePath].exports = patchedFactory;
