import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,BrowserRouter } from 'react-router'
import Payment from './components/Payment.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> 
      <Route path="payment" element={<Payment />} /> 
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
</StrictMode>
)
