import React from "react";

const Card = ({ image, name, price, description }) => {
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-74">
      {/* Image */}
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-800 font-semibold text-base">{name}</p>
          <p className="text-cyan-600 font-semibold text-base">
            {price}
          </p>
        </div>
        <p className="text-slate-600 text-sm font-light mb-4">
          {description}
        </p>
        <button
          className="mt-auto mb-3 w-full py-2 px-3 bg-blue-600 text-white text-sm rounded-md hover:bg-cyan-700 transition"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;