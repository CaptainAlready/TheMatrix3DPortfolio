import { Canvas } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Html, Loader, useProgress } from '@react-three/drei'
import { Suspense, useEffect } from 'react'
import './styles.css'
import { Scene } from './scene'

const audio = new Audio("/cityrain.mp3");
const isMobile = window.innerWidth < 1200;


function toggleAudio() {
  const audio_button = document.querySelector('.audio_button');
  audio.loop = true;
  audio.volume = 0.2;
  if (audio.paused) {
    audio_button.value = "🔊";
    audio.play();
  } else {
    audio_button.value = "🔇";
    audio.pause();
  }
}


export function App() {
  const { progress } = useProgress();


  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        const morbidElement = document.querySelector('.instructions');
        morbidElement.style.maxWidth = '100%';
      }, 4000);
    }

  }, []);


  return (
    <>
      <Canvas shadows camera={{ position: [0, 10, 150], fov: 30 }} >
        <Suspense fallback={null}>
          <Html center position-y={30}>
            <div textalign='center' align='center'>
              <h1 fontFamily='monospace' id={isMobile ? 'name_mobile' : 'name'}> Panos Kapetanidis</h1>
              <p fontFamily='monospace' id={isMobile ? 'title_mobile' : 'title'}>Computer Engineer</p>
              <input type='button' className="audio_button" value={"🔇"} onClick={toggleAudio}></input>
            </div>
          </Html>

          <spotLight position={[0, 100, 0]} color={0xe8dbf1} angle={0.2} penumbra={0.5} castShadow intensity={2} shadow-bias={-0.0001} />
          <ambientLight intensity={0.8} color={0xFFFAED} />


          {isMobile ?
            (<Scene center scale={window.innerWidth / 600} />)
            : (<Scene position={[-2.5, -10, 0]} scale={window.innerWidth / 1800} />)
          }

          <Html center position-y={-30}>
            <div className="instructions">
              <h1 fontFamily='monospace' id={isMobile ? 'title_mobile' : 'title'}>
                Click on the desk to start
              </h1>
            </div>
          </Html>

          <EffectComposer>
            <DepthOfField focusDistance={0} focalLength={0.7} bokehScale={4.5} height={480} />
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.3} height={300} />
            <Noise opacity={0.15} />
            <Vignette eskil={false} offset={0.1} darkness={1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}


