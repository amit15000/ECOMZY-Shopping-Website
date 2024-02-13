import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

function Product({ card }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromCart = (card) => {
    dispatch(remove(card.id));
    toast.warning("Item removed From Cart");
  };
  const addToCart = () => {
    dispatch(add(cart));
    toast.success("Item added to cart");
  };

  return (
    <div>
      <div>
        <p>{card.title}</p>
      </div>
      <div>
        <p>{card.description}</p>
      </div>
      <div>
        <img src={card.image} alt="Product" />
      </div>
      <div>
        <p>{card.price}</p>
      </div>
      {cart.some((p) => p.id === card.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Product;
