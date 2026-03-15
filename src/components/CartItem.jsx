import { formatMoney } from "../utils/money";
import { useCart } from "../contexts/CartContext/useCart";

const CartItem = ({ cartitem }) => {
  const { addToCart, removeFromCart } = useCart();
  const { product } = cartitem;

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemove = () => {
    removeFromCart(product._id);
  };

  return (
    <div className="flex gap-6 py-8 border-t border-gray-200 hover:bg-gray-50 transition rounded-lg px-4">

      {/* Product Image */}
      <div className="shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col grow justify-between">

        {/* Top Section */}
        <div className="space-y-2">

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>

          {/* Description */}
          {product.longDescription && (
            <p className="text-sm text-gray-600 line-clamp-2">
              {product.longDescription}
            </p>
          )}

          {/* Stock */}
          {product.inStock !== undefined && (
            <p className="text-sm">
              {product.inStock ? (
                <span className="text-green-600 font-medium">
                  ✓ In Stock ({product.stockCount})
                </span>
              ) : (
                <span className="text-red-600 font-medium">
                  ✕ Out of Stock
                </span>
              )}
            </p>
          )}

          {/* Rating */}
          {product.rating !== undefined && (
            <p className="text-sm text-gray-600">
              ⭐ {product.rating} ({product.reviewCount} reviews)
            </p>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-4">

          {/* Quantity + Actions */}
          <div className="flex items-center gap-4 text-sm">

            <span className="text-gray-600">
              Qty: <strong>{cartitem.count}</strong>
            </span>

            <button
              onClick={handleAddToCart}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Add one
            </button>

            <button
              onClick={handleRemove}
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Remove
            </button>

          </div>

          {/* Price */}
          <p className="text-lg font-bold text-gray-900">
            {formatMoney(product.price * cartitem.count)}
          </p>

        </div>

      </div>
    </div>
  );
};

export default CartItem;