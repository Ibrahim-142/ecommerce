import React from "react";
import { Link } from "react-router";
import {shoppingcart} from "../data/shoppingcart";
const ShoppinCart = () => {
  return (
    <div className="w-full sm:w-3/4 bg-white px-6 sm:px-10 py-10">

      {/* Header */}
      <div className="flex justify-between border-b pb-8">
        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        <h2 className="font-semibold text-2xl">
          {shoppingcart.length}{" "}
          {shoppingcart.length === 1 ? "Item" : "Items"}
        </h2>
      </div>

      {/* Empty Cart State */}
      {shoppingcart.length === 0 && (
        <div className="py-10 text-center text-gray-500">
          Your cart is empty.
        </div>
      )}

      {/* Cart Items */}
      {shoppingcart.map((item) => (
        <div
          key={item.id}
          className="md:flex items-stretch py-8 border-t border-gray-200"
        >
          {/* Image */}
          <div className="md:w-4/12 2xl:w-1/4 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 md:h-full object-cover rounded"
            />
          </div>

          {/* Product Info */}
          <div className="md:pl-6 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">

            <div className="flex items-center justify-between w-full">
              <p className="text-lg font-bold text-gray-800">
                {item.name}
              </p>

              <select
                aria-label="Select quantity"
                className="py-2 px-2 border border-gray-300 focus:outline-none"
              >
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>

            <p className="text-sm text-gray-600  pt-2">
              {item.longDescription}
            </p>

            {item.colors && (
              <p className="text-sm text-gray-600 py-2">
                Select Color:{" "}
                <select className="bg-gray-100 p-1 rounded-2xl">
                  {item.colors.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </p>
            )}

            <p>
              Select Size:{" "}
              <select className="bg-gray-100 p-1 rounded-2xl">
                {item.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </p>
            <p>
              {item.inStock ? (
                <span className="text-green-600 font-semibold">
                  In Stock ({item.stockCount} available)
                </span>
              ) : (
                <span className="text-red-600 font-semibold">
                  Out of Stock
                </span>
              )}
            </p>
            <p>
              Rating: {item.rating} / 5 ({item.reviewCount} reviews)
            </p>
            <div className="flex items-center justify-between pt-5">
              <div className="flex items-center space-x-5">
                <button  className="text-sm underline text-gray-800 cursor-pointer">
                  Add to Cart
                </button>
                <button  className="text-sm underline text-red-500 cursor-pointer">
                  Remove
                </button>
              </div>

              <p className="text-lg font-bold text-gray-800">
                {item.price ? `$${item.price}` : "200 Dollars"}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Continue Shopping */}
      <Link
        to="/"
        className="flex font-semibold text-indigo-600 text-sm mt-10"
      >
        <svg
          className="fill-current mr-2 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continue Shopping
      </Link>
    </div>
  );
};

export default ShoppinCart;