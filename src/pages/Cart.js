import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <>
      {cart.length > 0 ? (
        <div className="flex max-w-6xl  mx-auto mt-5 ">
          <div className="flex flex-col justify-between w-[80%] gap-y-10">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="flex flex-col justify-between h-[80vh] max-w-[300px]">
            <div className="flex flex-col">
              <div className=" text-lg font-semibold text-green-700">
                Your Cart
              </div>
              <div className="text-3xl font-bold text-green-700">
                Your Summary
              </div>
              <p className="mt-8">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">
                Total Amount:<span className="font-bold"> ${totalAmount}</span>
              </p>
              <button className="bg-green-800 text-xl text-white px-12 mt-4 rounded-lg py-2">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen gap-y-4">
          <h1 className="text-xl font-semibold ">Cart Empty</h1>
          <NavLink to={"/"}>
            <button className=" text-2xl bg-green-700 text-white px-2 rounded-md py-1 font-semibold">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Cart;
