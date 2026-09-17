import { useState } from "react";


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [player, setPlayer] = useState("X");

    function handleSelectSquare(rowIdx, colIdx, player) {
        setGameBoard((prevBoard) => {
            const updatedBoard = [...prevBoard.map(innerArr => [...innerArr])];
            updatedBoard[rowIdx][colIdx] = player;
            return updatedBoard;
        });
        setPlayer(() => { (player === "X") ? "O" : "X" });
    }

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIdx) => (
                <li key={rowIdx}>
                    <ol>
                        {row.map((playerSymbol, colIdx) => (
                            <li key={colIdx}>
                                <button onClick={() => { handleSelectSquare(rowIdx, colIdx, player) }}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}