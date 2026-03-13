// CartItem.jsx
import React, { useState } from "react";
import { formatMoney } from "../utils/money";
import { useCart } from "../contexts/CartContext/useCart";

const CartItem = ({cartitem }) => {
  const { addToCart, removeFromCart } =useCart();
  const { product, color: initialColor, size: initialSize } = cartitem;

  const [color, setColor] = useState(initialColor || product.colors?.[0] || "");
  const [size, setSize] = useState(initialSize || product.sizes?.[0] || "");

  // Add one more of this variant
  const handleAddToCart = () => {
    addToCart(product, color, size);
  };

  // Remove this variant completely
  const handleRemove = () => {
    removeFromCart(product._id, color, size);
  };

  return (
    <div  className="md:flex items-stretch py-8 border-t border-gray-200 hover:bg-gray-50 transition rounded-lg px-4">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:pl-6 md:w-8/12 2xl:w-3/4 flex flex-col justify-center space-y-3">
        {/* Title + Quantity */}
        <div className="flex items-center justify-between w-full">
          <p className="text-xl font-semibold text-gray-900 tracking-tight">
            {product.name} <span className="text-gray-800 font-normal ml-2">({cartitem.size})</span>
          </p>

          <p className="text-sm text-gray-600">Qty: {cartitem.count}</p>
        </div>

        {/* Description */}
        {product.longDescription && (
          <p className="text-sm text-gray-600 leading-relaxed">{product.longDescription}</p>
        )}

        {/* Color */}
        {product.colors?.length > 0 && (
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="font-medium text-gray-700">Color:</span>
            <select
              className="bg-gray-100 border border-gray-200 p-1 rounded-lg text-sm"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              {product.colors.map((c, idx) => (
                <option key={idx} value={c}>{c}</option>
              ))}
            </select>
          </p>
        )}

        {/* Size */}
        {product.sizes?.length > 0 && (
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <span className="font-medium text-gray-700">Size:</span>
            <select
              className="bg-gray-100 border border-gray-200 p-1 rounded-lg text-sm"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {product.sizes.map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </select>
          </p>
        )}

        {/* Stock */}
        {product.inStock !== undefined && (
          <p className="text-sm">
            {product.inStock ? (
              <span className="text-green-600 font-medium">
                ✓ In Stock ({product.stockCount} available)
              </span>
            ) : (
              <span className="text-red-600 font-medium">✕ Out of Stock</span>
            )}
          </p>
        )}

        {/* Price + Buttons */}
        <div className="flex items-center justify-between pt-4 mt-2">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleAddToCart}
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleRemove}
              className="text-sm font-medium text-red-500 hover:text-red-600 transition"
            >
              Remove
            </button>
          </div>

          <p className="text-xl font-bold text-gray-900">
            {formatMoney(product.price * cartitem.count)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;