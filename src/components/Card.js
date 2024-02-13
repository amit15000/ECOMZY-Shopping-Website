import React from "react";

function Card({ card }) {
  return (
    <div>
      <title>{card.title}</title>
      <p>{card.description}</p>
      <img src={card.image} alt="Card" />
    </div>
  );
}

export default Card;
