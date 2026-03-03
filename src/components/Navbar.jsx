import React from 'react';
import { Search, ShoppingCart, Package, Home as HomeIcon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 text-slate-800 px-6 py-4 flex items-center gap-4">

            {/* Left */}
            <div className="font-bold text-lg shrink-0 flex items-center gap-2 ">
                <button className="flex items-center gap-2 ml-4 mr-6 font-bold text-lg cursor-pointer hover:text-blue-600 transition">
                    <HomeIcon size={20} />
                    Home
                </button>
            </div>

            {/* Middle */}
            <div className="flex-1 flex justify-center min-w-0">
                <div className="flex w-full max-w-2xl">
                    <input
                        className="flex-1 bg-white px-4 py-3 text-slate-600 text-base rounded-l-lg outline-none border border-slate-300 focus:ring-2 focus:ring-blue-500"
                        type="search"
                        placeholder="Search products..."
                    />
                    <button className="flex items-center justify-center px-5 bg-blue-700 rounded-r-lg hover:bg-blue-800 transition">
                        <Search size={20} className="text-white" />
                    </button>
                </div>
            </div>

            {/* Right */}
            <div className="flex gap-6 font-semibold items-center shrink-0">
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                    <Package size={18} />
                    <span className="hidden sm:inline">Orders</span>
                </button>

                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                    <ShoppingCart size={18} />
                    <span className="hidden sm:inline">Cart</span>
                </button>
            </div>

        </nav>
    )
}

export default Navbar;