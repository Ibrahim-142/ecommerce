import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";

import { useAuth } from "./contexts/AuthContext/useAuth";

function App() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  // fetch products
  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      {/* Navbar only visible when user is logged in */}
      {user && <Navbar />}

      <Routes>
        {/* Public route */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected routes */}
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <HomePage products={products} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;