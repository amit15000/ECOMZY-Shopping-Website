import React from "react";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex w-full bg-blue-950 p-2">
      <div className="flex justify-between w-full max-w-5xl mx-auto">
        <div className="flex gap-x-3">
          <NavLink to={"/"}>
            <img
              className="border-2 rounded-full p-2 "
              src={logo}
              width={60}
              alt="logo"
            />
          </NavLink>
          <span className="text-green-500 font-semibold">ECOMZY</span>
        </div>
        <div className="flex items-center gap-x-4 text-white text-lg">
          <NavLink to={"/"}>
            <p className="font-amit">Home</p>
          </NavLink>

          <span>
            <NavLink to={"/cart"}>
              <FaShoppingCart />
            </NavLink>
            <p>{cart.length > 0 && <p>{cart.length}</p>}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
