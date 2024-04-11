import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import { MatrixBackground } from './matrix'
import { SpeedInsights } from "@vercel/speed-insights/react"

function Overlay() {
  return (
    <div className='overlay' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        Panos
        <br />
        Kapetanidis
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>TheMatrix<br />3DPortfolio </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>2024</div>
    </div>
  )
}

const renderApp = () => {
  const isMobile = window.innerWidth < 1200;

  createRoot(document.getElementById('root')).render(
    <>
      <MatrixBackground />
      <Overlay />
      <App />
    </>
  )

  document.body.style.overflow = 'hidden'; // Disable scrolling

}


window.addEventListener('orientationchange', renderApp)
renderApp()


