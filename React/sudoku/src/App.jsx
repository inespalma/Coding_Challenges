import React, { useState } from "react";
import "./App.css";
import { FaHeart } from "react-icons/fa";

function App() {
  const initialBoard = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9],
  ];

  const solution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  const [numSelected, setNumSelected] = useState(null);
  const [errors, setErrors] = useState(new Set());
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [board, setBoard] = useState(initialBoard);

  const isValidPlacement = (board, row, col, value) => {
    if (value < 1 || value > 9) {
      return false;
    }

    if (board[row][col] !== "") {
      return false;
    }

    if (board[row].includes(value)) {
      return false;
    }

    for (let i = 0; i < 9; i++) {
      if (board[i][col] === value) {
        return false;
      }
    }

    const subgridRowStart = Math.floor(row / 3) * 3;
    const subgridColStart = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[subgridRowStart + i][subgridColStart + j] === value) {
          return false;
        }
      }
    }

    if (solution[row][col] !== value) {
      return false;
    }

    return true;
  };

  const selectTile = (row, col) => {
    if (numSelected && board[row][col] === "" && lives > 0) {
      const newValue = parseInt(numSelected);
      if (isValidPlacement(board, row, col, newValue)) {
        const newBoard = [...board];
        newBoard[row][col] = newValue;
        setBoard(newBoard);
        setErrors(new Set());
        if (
          newBoard.every((row, rIdx) =>
            row.every((cell, cIdx) => cell === solution[rIdx][cIdx])
          )
        ) {
          setGameOver(true);
          alert("Congrats! You are the Winner");
        }
      } else {
        setErrors(new Set([...errors, `${row}-${col}`]));
        setLives(lives - 1);
        if (lives <= 1) {
          setGameOver(true);
          alert("Game Over! You lost!");
        }
      }
    }
  };

  const handleReset = () => {
    setBoard(initialBoard);
    setErrors(new Set());
    setLives(3);
    setGameOver(false);
    setNumSelected(null);
  };

  const selectNumber = (number) => {
    if (!gameOver) {
      setNumSelected(number);
    }
  };

  return (
    <div className="sudoku-container">
      <h1>Sudoku</h1>
      <hr />
      <div class="livesAndReset">
        <div id="lives">
          {Array.from({ length: lives }, (_, i) => (
            <FaHeart key={i} className="heart heart-full" />
          ))}
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h2 id="errors">{errors.size > 0 ? "Errors found!" : ""}</h2>
      {gameOver && <h2>Game Over! Please reset the game.</h2>}

      <div id="digits">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i + 1}
            id={i + 1}
            className={`number ${
              numSelected === (i + 1).toString() ? "number-selected" : ""
            }`}
            onClick={() => selectNumber((i + 1).toString())}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div id="board">
        {board.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((tile, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                className={`tile ${tile !== "" ? "tile-start" : ""} ${
                  tile === "" ? "tile-empty" : ""
                } ${errors.has(`${rIdx}-${cIdx}`) ? "tile-error" : ""}`}
                onClick={() => selectTile(rIdx, cIdx)}
              >
                {tile}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
