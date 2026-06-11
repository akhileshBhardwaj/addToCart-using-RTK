import React from "react";
import { IoCart } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import {
  selectCartTotalPrice,
  selectedCartItems,
} from "../redux/cartSlice/CartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItemTotalPrice = useSelector(selectCartTotalPrice);
  const cartItem = useSelector(selectedCartItems);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center">
              <FaStore size={20} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                Redux Store
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">
                Premium Shopping Experience
              </p>
            </div>
          </Link>

          {/* Total Price */}
          <div className="hidden md:flex items-center">
            <div className="bg-slate-100 px-5 py-3 rounded-2xl border border-slate-200">
              <p className="text-xs text-slate-500">
                Total Cart Value
              </p>

              <h3 className="font-bold text-slate-900">
                ₹ {cartItemTotalPrice}
              </h3>
            </div>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          >
            <IoCart className="text-2xl" />

            <span className="hidden sm:block font-medium">
              Cart
            </span>

            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-6 h-6 px-1 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartItem.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Price Section */}
        <div className="md:hidden pb-4">
          <div className="bg-slate-100 px-4 py-3 rounded-xl border border-slate-200 text-center">
            <p className="text-xs text-slate-500">
              Total Cart Value
            </p>

            <h3 className="font-bold text-slate-900">
              ₹ {cartItemTotalPrice}
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
