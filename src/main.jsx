import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GamesApp } from './GamesApp.jsx'
import ScrollToTop from './utils/ScrollToTop'
import './styles/global.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop>
      <GamesApp />
    </ScrollToTop>
  </BrowserRouter>,
)
