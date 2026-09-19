export default function Card({ image, name, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
