import { useEffect ,useState} from 'react';
import OrderSummary from '../components/OrderSummary';
import ShoppingCart from '../components/ShoppingCart';
import { shoppingcart} from '../data/shoppingcart';
const CheckoutPage = () => {
  const [cart,setCart] = useState([]);
  useEffect(() => {
    setCart(shoppingcart);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-5 ">
        <div className="sm:flex shadow-md my-10">
          <ShoppingCart cart={cart} />
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;