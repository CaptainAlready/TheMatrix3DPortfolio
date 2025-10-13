import { useEffect } from 'react'
import { useProgress, Html } from '@react-three/drei'

export const LoadingScreen = ({ started, onStarted }) => {
    const { progress } = useProgress();
    useEffect(() => {
        if (progress === 100) {
            const instructionsLoading = document.querySelector('.instructions_loading');
            const startButton = document.querySelector('.start-button');
            if (instructionsLoading) {
                instructionsLoading.style.maxWidth = '100%';
            }
            if (startButton) {
                startButton.style.opacity = 1;
            }
        }
    }, [progress]);


    return (
        <Html center>
            <div className="instructions_loading">
                <p fontFamily='monospace' className='instructions_loading_text'>
                    Will you take the red pill?
                </p>
            </div>

            <div className="progress">
                <button className='start-button'
                    disabled={progress < 100}
                    onClick={() => {
                        setTimeout(() => {
                            const morbidElement = document.querySelector('.instructions');
                            if (morbidElement) {
                                morbidElement.style.maxWidth = '100%';
                            }
                        }, 4000);
                        onStarted();
                        const startBtn = document.querySelector('.start-button');
                        const progressWrapper = document.querySelector('.progress');
                        const instructionsLoading = document.querySelector('.instructions_loading');
                        const instructionsLoadingText = document.querySelector('.instructions_loading_text');
                        const overlay = document.querySelector('.overlay');
                        const canvas = document.querySelector('canvas');
                        if (startBtn) startBtn.style.display = 'none';
                        if (progressWrapper) progressWrapper.style.display = 'none';
                        if (instructionsLoading) instructionsLoading.style.display = 'none';
                        if (instructionsLoadingText) instructionsLoadingText.style.display = 'none';
                        if (overlay) overlay.style.display = 'block';
                        if (canvas) canvas.style.display = 'block';


                    }}
                >  <img src="/redpill.png" width="50"></img>
                </button>
            </div>
        </Html>
    )
}
