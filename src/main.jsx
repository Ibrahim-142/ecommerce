import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext/CartProvider.jsx';
import {BrowserRouter} from 'react-router';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
      <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
