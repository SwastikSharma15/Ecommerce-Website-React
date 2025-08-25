import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/CheckoutPage' 
import OrdersPage from './pages/OrdersPage'
import TrackingPage from "./pages/TrackingPage";
import { NotFoundPage } from './pages/NotFoundPage';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [cart, setCart] = useState([])

  

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage />} />
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes> 
  )
}

export default App
