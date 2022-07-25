import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './components/navbar/navbar.css'
import  './components/novedades/novedades.css'
import './components/playlist/playlist.css'
import './components/titulo/titulo.css'
import './index.css'

//llamamos una funcion porque app es una funcion de esta forma --> <App/>

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
