export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      {winner ? <h2>Congratulations!</h2> : <h2>Game Over!</h2>}
      {winner ? <p>{winner} has won!</p> : <p>it's a draw</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
      </p>
    </div>
  );
}
