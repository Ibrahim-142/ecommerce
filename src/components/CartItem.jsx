import React from 'react';
import {formatMoney} from '../utils/money'
const CartItem = ({ cartitem }) => {
  const { product, color, size, count } = cartitem;

  return (
    <div className="md:flex items-stretch py-8 border-t border-gray-200">

      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 md:h-full object-cover rounded"
        />
      </div>

      <div className="md:pl-6 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-bold text-gray-800">{product.name}</p>

          <select
            aria-label="Select quantity"
            className="py-2 px-2 border border-gray-300 focus:outline-none"
            defaultValue={count}
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>

        {product.longDescription && (
          <p className="text-sm text-gray-600 pt-2">{product.longDescription}</p>
        )}

        {product.colors && product.colors.length > 0 && (
          <p className="text-sm text-gray-600 py-2">
            Select Color:
            <select className="bg-gray-100 p-1 rounded-2xl ml-2" defaultValue={color}>
              {product.colors.map((c, index) => (
                <option key={index} value={c}>{c}</option>
              ))}
            </select>
          </p>
        )}

        {product.sizes && product.sizes.length > 0 && (
          <p>
            Select Size:
            <select className="bg-gray-100 p-1 rounded-2xl ml-2" defaultValue={size}>
              {product.sizes.map((s, index) => (
                <option key={index} value={s}>{s}</option>
              ))}
            </select>
          </p>
        )}

        {product.inStock !== undefined && (
          <p>
            {product.inStock ? (
              <span className="text-green-600 font-semibold">
                In Stock ({product.stockCount} available)
              </span>
            ) : (
              <span className="text-red-600 font-semibold">Out of Stock</span>
            )}
          </p>
        )}

        <p>
          Rating: {product.rating} / 5 ({product.reviewCount} reviews)
        </p>

        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center space-x-5">
            <button className="text-sm underline text-gray-800 cursor-pointer">
              Add to Cart
            </button>
            <button className="text-sm underline text-red-500 cursor-pointer">
              Remove
            </button>
          </div>

          <p className="text-lg font-bold text-gray-800">
            {formatMoney(product.price)}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CartItem;