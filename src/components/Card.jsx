import {useState} from "react";
import {useCart} from "../contexts/CartContext/useCart.js";
import {formatMoney} from "../utils/money.js";

const Card = ({product}) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(product);      
    setAdded(true);          
    setTimeout(() => setAdded(false), 500);
  }

  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-74">
      {/* Image */}
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-800 font-semibold text-base">{product.name}</p>
          <p className="text-cyan-600 font-semibold text-base">
            {formatMoney(product.price)}
          </p>
        </div>

        <p className="text-slate-600 text-sm font-light mb-4">
          {product.description}
        </p>

        <button
          className="cursor-pointer mt-auto mb-3 w-full py-2 px-3 bg-blue-600 text-white text-sm rounded-md hover:bg-cyan-700 transition"
          type="button"
          onClick={handleAddToCart}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Card;