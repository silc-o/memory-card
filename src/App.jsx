import { useEffect, useState } from "react";

export default function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12",
      );
      const data = await response.json();
      setCards(data.results);
      console.log(data);
    };

    fetchCards();
  }, []);

  return <div>{/* render cards here */}</div>;
}
