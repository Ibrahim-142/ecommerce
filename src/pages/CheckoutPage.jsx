import { useEffect } from 'react';
import OrderSummary from '../components/OrderSummary';
import ShoppingCart from '../components/ShoppingCart';
import { useCart } from '../contexts/CartContext/useCart';
import axios from 'axios';
const CheckoutPage = () => {
  const cart = useCart();
  useEffect(() => {
  const syncCartWithDB = async () => {
  try {
    const payload = cart.cart.map(item => ({
      product: item.product._id,  // <--- only send ID
      count: item.count,
      color: item.color,           // optional
      size: item.size              // optional
    }));

    if (payload.length > 0) {
      await axios.post("/api/cart/addtocart", payload);
    }
  } catch (error) {
    console.error("Error syncing cart with backend:", error);
  }
};

    syncCartWithDB();
  }, [cart.cart]);
  return (
    <>
      <div className="container mx-auto mt-5 ">
        <div className="sm:flex shadow-md my-10">
          <ShoppingCart />
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;