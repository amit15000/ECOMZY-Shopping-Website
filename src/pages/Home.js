import React, { useEffect, useState } from "react";

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
  return <div>Home</div>;
}

export default Home;
