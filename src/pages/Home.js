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
    <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : cards.length > 0 ? (
        <div className="grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto  space-y-10 space-x-5">
          {cards.map((card) => (
            <Product key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>No card found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
