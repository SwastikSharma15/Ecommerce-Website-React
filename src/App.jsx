import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/Home/HomePage'
import CheckoutPage from './pages/Checkout/CheckoutPage' 
import OrdersPage from './pages/OrdersPage'
import TrackingPage from "./pages/TrackingPage";
import { NotFoundPage } from './pages/NotFoundPage';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then ( (response) => {
      setCart(response.data);
      console.log(response.data);
      
    })
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes> 
  )
}

export default App
