import { useState } from "react";

import Square from "./Square";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([squares]);
  const [step, setStep] = useState(0);

  function isDraw(squares) {
    return squares.every((square) => square !== null) && !CalculateWinner(squares);
  }
   

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    const newHistory = history.slice(0, step + 1);
    newHistory.push(nextSquares);


    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setHistory(newHistory);
    setStep(newHistory.length - 1);
  }
  function jumpTo(step) {
    setStep(step);
    setXIsNext(step % 2 === 0);
    setSquares(history[step]);
  }
  function restartGame() {
    setSquares(Array(9).fill(null));
    setHistory([Array(9).fill(null)]);
    setStep(0);
    setXIsNext(true);
  }

  const winner = CalculateWinner(squares);
  const draw = isDraw(squares);
  const moves = history.map((_, move) => (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>
        {move === 0 ? "Go to game start" : `Go to move #${move}`}
      </button>
    </li>
  ));
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if (draw){
    status = "Draw";
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div>
        <button onClick={() => jumpTo(step - 1)} disabled={step === 0}>
          Undo
        </button>
        <button onClick={restartGame}>Restart</button>
      </div>
      
      <div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;

}



