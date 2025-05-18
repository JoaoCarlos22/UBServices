import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes'
import NavBar from './components/NavBar'
import GlobalStyle from './styles/globalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <NavBar/>
    <AppRoutes />
  </StrictMode>,
)
