import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Routes, Route } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
    const [products, setProducts] = useState([]);
   useEffect(() => {
    axios.get("api/products")
      .then((response) => {
        setProducts(response.data);
      })
  }, [])

  return (
    <>
      <Navbar /> {/* Navbar uses useCart internally, no need for cartsize prop */}
      <Routes>
        <Route index element={<HomePage products={products}/>} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetailsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage  />} />
      </Routes>
    </>
  );
}

export default App;