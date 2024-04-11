import { useProgress, Html } from '@react-three/drei'

export const LoadingScreen = ({ started, onStarted }) => {
    const { progress } = useProgress();

    if (progress === 100) {
        const morbidElement = document.querySelector('.instructions_loading');
        morbidElement.style.maxWidth = '100%';
    }

    return (
        <Html center>
            <div className="instructions_loading">
                <p fontFamily='monospace' className='instructions_loading_text'>
                    Will you take the red pill?
                </p>
            </div>

            <div className="progress">
                <div textalign='center' align='center' className="progress-value" style={{ width: `${progress}%` }}></div>
                <button className='start-button'
                    disabled={progress < 100}
                    onClick={() => {
                        setTimeout(() => {
                            const morbidElement = document.querySelector('.instructions');
                            morbidElement.style.maxWidth = '100%';
                        }, 4000);
                        onStarted();
                        document.querySelector('.start-button').style.display = 'none';
                        document.querySelector('.progress').style.display = 'none';
                        document.querySelector('.instructions_loading').style.display = 'none';
                        document.querySelector('.instructions_loading_text').style.display = 'none';
                        document.querySelector('.overlay').style.display = 'block';
                        document.querySelector('canvas').style.display = 'block';


                    }}
                >  <img src="/redpill.png" width="50"></img>
                </button>
            </div>
        </Html>
    )
}

