import { Canvas } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Html } from '@react-three/drei'
import { Suspense, useState, useEffect } from 'react'
import './styles.css'
import { Scene } from './scene.jsx'
import { LoadingScreen } from './LoadingScreen.js'

const audio = new Audio("/cityrain.mp3");
const isMobile = window.innerWidth < 1200;


function toggleAudio() {
  const audio_button = document.querySelector('.audio_button');
  if (audio.paused) {
    audio_button.value = "🔊";
    audio.play();
  } else {
    audio_button.value = "🔇";
    audio.pause();
  }
}


export function App() {

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      audio.loop = true;
      audio.volume = 0.2;
      audio.play();
    }
  }, [start]);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 10, 150], fov: 30 }} >
        <Suspense fallback={null}>
          {start && <>
            <Html center position-y={30}>
              <div textalign='center' align='center'>
                <h1 fontFamily='monospace' id={isMobile ? 'name_mobile' : 'name'}> Panos Kapetanidis</h1>
                <p fontFamily='monospace' id={isMobile ? 'title_mobile' : 'title'}>Computer Engineer</p>
                <input type='button' className="audio_button" value={"🔊"} onClick={toggleAudio}></input>
              </div>
            </Html>

            <spotLight position={[0, 25, 0]} angle={0.3} penumbra={1} castShadow intensity={2.5} shadow-bias={-0.0001} />
            <ambientLight intensity={0.8} color={0xe8dbf1} />


            {isMobile ?
              (<Scene center scale={window.innerWidth / 600} />)
              : (<Scene position={[-2.5, -10, 0]} scale={window.innerWidth / 1800} />)
            }

            <Html center position-y={-30}>
              <div className="instructions">
                <h1 fontFamily='monospace' id={isMobile ? 'title_mobile' : 'title'}>
                  click on the desk to start
                </h1>
              </div>
            </Html>

            <EffectComposer>
              <DepthOfField focusDistance={0} focalLength={0.7} bokehScale={4.5} height={480} />
              <Bloom luminanceThreshold={0} luminanceSmoothing={0.3} height={300} />
              <Noise opacity={0.15} />
              <Vignette eskil={false} offset={0.1} darkness={1} />
            </EffectComposer>
          </>}
        </Suspense>
        <LoadingScreen started={start} onStarted={() => setStart(true)} />
      </Canvas>

    </>
  );
}


