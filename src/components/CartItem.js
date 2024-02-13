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
      <div>
        <img src={item.image} alt="Item" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
      </div>
      <div>
        <p>{item.price}</p>
        <p onClick={removeFromCart}>
          <MdDeleteForever />
        </p>
      </div>
    </div>
  );
}

export default CartItem;
