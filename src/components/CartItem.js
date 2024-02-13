import React from "react";
import { MdDeleteForever } from "react-icons/md";

function CartItem({ item }) {
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
        <p>
          <MdDeleteForever />
        </p>
      </div>
    </div>
  );
}

export default CartItem;
