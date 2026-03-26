import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './contexts/CartContext/CartProvider.jsx';
import {BrowserRouter} from 'react-router';
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { ToastProvider } from './contexts/ToastContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToastProvider>
    <AuthProvider>
      <CartProvider>
      <App />
      </CartProvider>
      </AuthProvider>
      </ToastProvider>
    </BrowserRouter>

  </StrictMode>,
)
