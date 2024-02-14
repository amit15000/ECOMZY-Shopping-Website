import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  async function fetchProductsData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const products = await res.json();
      setCards(products);
    } catch (error) {
      console.log("Error in fetching responos from API");
      setCards([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchProductsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : cards.length > 0 ? (
        <div className="grid grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]  ">
          {cards.map((card) => (
            <Product key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <p>No card found</p>
      )}
    </div>
  );
}

export default Home;
