import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import { Routes, Route } from 'react-router';
import { shoppingcart } from './data/shoppingcart';
import { useEffect, useState } from 'react';
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(shoppingcart);
  }, []);
  let totalitems = 0;
  shoppingcart.forEach((item) => {
    totalitems += item.count;
  })
  return (
    <>
      <Navbar cartsize={totalitems}></Navbar>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default App;