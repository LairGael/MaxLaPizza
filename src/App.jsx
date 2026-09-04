import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './Secciones/Hero.jsx'
import Navbar from './Secciones/Navbar.jsx'
import Footer from './Secciones/Footer.jsx'
import HeroMax from './Secciones/Hero.jsx'
import Mapa from './Secciones/Mapa.jsx'
import LaMejorComida from './Secciones/LaMejorComida.jsx'
import Ubicanos from './Secciones/Ubicanos.jsx'
import Slider from './Secciones/Slider.jsx'
import WhatsApp from './Secciones/WhatsApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroMax />
      <LaMejorComida />
      <Slider />
      <Ubicanos />
      <Mapa />
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
