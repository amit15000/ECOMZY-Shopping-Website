import React, { useState } from "react";

function Product({ card }) {
  const [seleted, setSelected] = useState(false);
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
      {seleted ? <p>Remove Item</p> : <p>Add to Cart</p>}
    </div>
  );
}

export default Product;
