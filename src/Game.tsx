import React, { useState } from "react";
import "./Game.scss";

function Square({ value, onClick }: { value: string; onClick: () => void }) {
  return (
    <button style={{ width: 60, height: 60, fontSize: 24 }} onClick={onClick}>
      {value}
    </button>
  );
}
const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    if (squares[i]) return;
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
};

export default Game;
