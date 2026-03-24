import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext/CartProvider.jsx';
import {BrowserRouter} from 'react-router';
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      <App />
      </CartProvider>
      </AuthProvider>

    </BrowserRouter>

  </StrictMode>,
)
