import Card from "./Card";

export default function RenderCard({ cards, onCardClick }) {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          name={card.name}
          onClick={() => onCardClick(card.id)}
        />
      ))}
    </div>
  );
}
