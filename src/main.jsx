import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route,BrowserRouter } from 'react-router'
import Payment from './components/Payment.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}> 
      <Route path="payment" element={<Payment />} /> 
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
</StrictMode>
)
