import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, matchPath } from "react-router";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Chatbot from "./components/Chatbot";
import { useAuth } from "./contexts/AuthContext/useAuth";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    axios.get("/api/products").then((res) => setProducts(res.data));
  }, []);

  // Define routes with a public flag
  const routes = [
    { path: "/", element: <LoginPage />, public: true },
    { path: "/register", element: <RegisterPage />, public: true },
    { path: "/homepage", element: <HomePage products={products} />, public: false },
    { path: "/checkout", element: <CheckoutPage />, public: false },
    { path: "/orders", element: <OrdersPage />, public: false },
    { path: "/orders/:id", element: <OrderDetailsPage />, public: false },
    { path: "/product/:id", element: <ProductDetailsPage />, public: false },
    { path: "/chatbot", element: <Chatbot />, public: false },

  ];

  // Find the current route
  const currentRoute = routes.find((r) =>
    matchPath({ path: r.path, end: true }, location.pathname)
  );

  // Navbar shows only if route exists and is protected
  const showNavbar = user && currentRoute && !currentRoute.public;

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {routes.map((r) => {
          const element = r.public ? r.element : <ProtectedRoute>{r.element}</ProtectedRoute>;
          return <Route key={r.path} path={r.path} element={element} />;
        })}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;