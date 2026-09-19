import { useEffect, useState } from "react";
import RenderHeader from "./components/Header";
import RenderCard from "./components/RenderCard";

export default function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedId, setClickedId] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12",
        );
        const data = await response.json();

        // data.results is [{ name, url }, { name, url }, ...] — 12 of these

        const detailedCards = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData = await detailResponse.json();
            return {
              id: detailData.id,
              name: detailData.name,
              image: detailData.sprites.front_default,
            };
          }),
        );

        setCards(detailedCards);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleCardClick = (id) => {
    if (clickedId.includes(id)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedId([]);
    } else {
      setClickedId((prevList) => [...prevList, id]);
      setScore((score) => score + 1);
    }

    setCards(cards.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="app">
      <RenderHeader score={score} highScore={highScore} />
      {isLoading ? (
        <p>Loading pokemon...</p>
      ) : (
        <RenderCard cards={cards} onCardClick={handleCardClick} />
      )}
    </div>
  );
}
