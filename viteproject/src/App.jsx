import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './components/navbar/navbar.css'
import './App.css'
import Navbar from "./components/navbar/Navbar"
import Novedades from './components/novedades/Novedades'

function App() {
  // const [count, setCount] = useState(0)
  let titulo ="Meli"
  
  return (
    
  <>
  <Navbar titulo="nombreProyecto"/>
  <h1>Hola</h1>
  <Novedades/>
  </>
  
    )
}

export default App

