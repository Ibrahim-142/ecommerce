import { Search, ShoppingCart, Package, Home as HomeIcon, LogOut } from "lucide-react";
import { Link } from "react-router";
import { useCart } from "../contexts/CartContext/useCart";
import { useState } from "react";
import { Bot } from "lucide-react";
import { useAuth } from "../contexts/AuthContext/useAuth"; // import auth
import Chatbot from "./Chatbot"
const Navbar = () => {
  const { totalItems } = useCart();
  const { logout } = useAuth(); // get logout function
  const [showChatbot, setShowChatbot] = useState(false);
  const toggleChatbot = () => setShowChatbot((prev) => !prev);
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 text-slate-800 px-6 py-4 flex items-center gap-4">
        {/* Left */}
        <div className="shrink-0 flex items-center ">
          <Link
            to="/homepage"
            className="flex items-center gap-2 ml-4 mr-6 font-bold text-lg cursor-pointer hover:text-blue-600 transition"
          >
            <HomeIcon size={20} className="text-slate-800" />
            Home
          </Link>
           <button
            onClick={toggleChatbot}
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Bot size={24} />
          </button>
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
            <Package size={22} />
            <span className="hidden sm:inline">Orders</span>
          </Link>

          <Link
            to="/checkout"
            className="relative flex items-center gap-2 leading-none cursor-pointer hover:text-blue-600 transition"
          >
            <ShoppingCart size={25} />
            <span className="hidden sm:inline">Cart</span>
            <p className="absolute -top-3.5 left-1 font-bold rounded-full flex items-center justify-center text-xs bg-blue-700 text-white w-5 h-5">
              {totalItems || 0}
            </p>
          </Link>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition"
          >
            <LogOut size={22} />
            <span className="hidden sm:inline">Logout</span>
          </button>
         
        </div>

      </nav>
      {showChatbot && (
        <div className="fixed top-20 left-0 z-50">
          <Chatbot  onClose={toggleChatbot} />
        </div>
      )}
    </>
  );
};

export default Navbar;