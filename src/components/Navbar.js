import React from "react";
import logo from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar() {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex w-full p-2 bg-slate-900">
      <nav className="flex justify-between w-full max-w-6xl mx-auto">
        <div className="flex gap-x-3">
          <NavLink to={"/"}>
            <img
              className="border-[3px] rounded-full p-2 "
              src={logo}
              width={60}
              alt="logo"
            />
          </NavLink>
          <span className="text-green-500 font-semibold text-lg tracking-widest">
            <span className="underline underline-offset-8">ShopNest</span>
            <br />
            <span className="text-white text-xs font-sans">
              Cozy Shopping, Simplified
            </span>
          </span>
        </div>
        <div className="flex items-center gap-x-6 text-white text-lg tracking-wider">
          <NavLink to={"/"}>
            <p className="font-amit text-2xl">Home</p>
          </NavLink>

          <div className=" relative flex text-3xl ">
            <div className="">
              <NavLink to={"/cart"}>
                <FaShoppingCart />
              </NavLink>
            </div>
            <div>
              {cart.length > 0 && (
                <div className="absolute bg-green-500 animate-bounce text-white text-center align-middle text-sm rounded-full w-5 h-5 left-4 -top-1">
                  {cart.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
