import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home'
import NavBar from './components/NavBar'
import GlobalStyle from './styles/globalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <Home />
    <GlobalStyle/>
  </StrictMode>,
)
