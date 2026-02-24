import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {GlobalStyle} from './styles/globalStyle'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalStyle/>
      <NavBar/>
      <AppRoutes />
      <Footer />
    </StrictMode>
  </BrowserRouter>,
)
