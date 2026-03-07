import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [cart, setCart] = useState([]);
   useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/cart');
        setCart(response.data);
        console.log('Cart data:', response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []); 
 const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
  return (
    <>
      <Navbar cartsize={totalItems}></Navbar>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default App;