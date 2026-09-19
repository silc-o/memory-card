export default function RenderHeader({ score, highScore }) {
  return (
    <header>
      <h3>PokeMemory</h3>
      <div className="scores">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
}
