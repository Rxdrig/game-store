import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JuegosApp } from './JuegosApp.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JuegosApp/>
    </BrowserRouter>   
  </React.StrictMode>,
)
