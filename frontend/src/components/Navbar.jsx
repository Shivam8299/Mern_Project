import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* <img className="h-8 rounded w-20" src="Trendyfy_logo.webp" alt="Logo" /> */}

      <h1 className="text-xl font-semi-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
        TRENDYFY.
      </h1>
      <ul className="hidden md:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden " />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="Search_icon"
        />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile_icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Admin Profile</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="cart_icon" />
          <button className="absolute right-[-5px] bottom-[-5px] w-4 text-center text-xs leading-4 bg-black  text-white aspect-square rounded-full ">
            10
          </button>
        </Link>
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          className="w-5 cursor-auto sm:hidden"
          alt=""
        />
      </div>
      {/* sidebar menu for small screens  */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
          showMenu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setShowMenu(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="py-2 pl-6 border border-gray-200"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="py-2 pl-6 border border-gray-200"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setShowMenu(false)}
            className="py-2 pl-6 border border-gray-200"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
