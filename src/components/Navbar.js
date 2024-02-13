import React from "react";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
    <div className="flex w-full bg-blue-950 p-2">
      <div className="flex justify-between w-full max-w-5xl mx-auto">
        <div>
          <NavLink to={"/"}>
            <img
              className="border-2 rounded-full p-2 "
              src={logo}
              width={60}
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="flex items-center gap-x-4 text-white text-lg">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>

          <span>
            <NavLink to={"/cart"}>
              <FaShoppingCart />
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
