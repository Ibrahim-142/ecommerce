import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Navbar /> {/* Navbar uses useCart internally, no need for cartsize prop */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;