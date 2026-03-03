import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-64">
      {/* Image */}
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col grow">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-800 font-semibold text-base">Apple AirPods</p>
          <p className="text-cyan-600 font-semibold text-base">$95.00</p>
        </div>
        <p className="text-slate-600 text-sm font-light mb-4">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
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