import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img className="h-13 rounded w-28" src="Trendyfy_logo.webp" alt="Logo" />
      <ul className="hidden md:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-red-500 hidden " />
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
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
    </div>
  );
}

export default Navbar;
