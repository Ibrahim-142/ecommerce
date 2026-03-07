import React from "react";
import { Search, ShoppingCart, Package, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = ({cartsize}) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 text-slate-800 px-6 py-4 flex items-center gap-4">
      {/* Left */}
      <div className="shrink-0 flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 ml-4 mr-6 font-bold text-lg cursor-pointer hover:text-blue-600 transition"
        >
          <HomeIcon size={20} className="text-slate-800" />
          Home
        </Link>
      </div>

      {/* Middle */}
      <div className="flex justify-center w-full px-2">
        <div className="flex w-full max-w-2xl">
          <input
            type="search"
            placeholder="Search products..."
            className="flex-1 min-w-0 bg-white px-4 py-3 text-slate-600 text-base rounded-l-lg outline-none border border-slate-300 focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center justify-center px-5 bg-blue-700 rounded-r-lg hover:bg-blue-800 transition">
            <Search size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex gap-6 font-semibold items-center shrink-0">
        <Link
          to="/orders"
          className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition"
        >
          <Package size={20} />
          <span className="hidden sm:inline">Orders</span>
        </Link>
        <Link
          to="/checkout"
          className="relative flex items-center gap-2 leading-none cursor-pointer hover:text-blue-600 transition"
        >
          <ShoppingCart size={25} />

          <span className="hidden sm:inline">Cart</span>

          <p className="absolute -top-3.5 left-1 font-bold rounded-full flex items-center justify-center text-xs bg-blue-700 text-white w-5 h-5">
            {cartsize}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;