import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.warning("Item removed successfully");
  };
  return (
    <div>
      <div className="flex gap-x-14 ">
        <div className="flex flex-col">
          <img className="max-w-[150px]" src={item.image} alt="Item" />
        </div>
        <div className="flex flex-col max-w-[300px] justify-around ">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
          <div className="flex justify-between">
            <p className="text-green-700 font-bold">${item.price}</p>
            <p
              className="text-red-900 bg-red-200 p-2 rounded-full "
              onClick={removeFromCart}
            >
              <MdDeleteForever />
            </p>
          </div>
        </div>
      </div>
      <div className="h-[2px] max-w-[510px] bg-black mt-4"></div>
    </div>
  );
}

export default CartItem;
