import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GamesApp } from './GamesApp.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GamesApp />
  </BrowserRouter>,
)
