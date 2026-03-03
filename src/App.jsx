import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import { Routes, Route } from 'react-router';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </>
  );
}

export default App;