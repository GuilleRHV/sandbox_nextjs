import Swal from 'sweetalert2';
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Card, CardBody } from "@nextui-org/react";

function TicTacToe() {
    const [tablegame, setTable] = useState(Array(9).fill(null));
    const [turn, changeTurn] = useState('⭕');
    const [isFinished, finishGame] = useState(false);
    const COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = (board) => {
        let isfull = true;
        for (const combo of COMBOS) {
            const [a, b, c] = combo;
            if (board[a] === turn && board[b] === turn && board[c] === turn) {
                confetti();
                Swal.fire("El ganador es " + turn);
                finishGame(true);
                return;
            }
        }
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) isfull = false;
        }
        if (isfull) {
            Swal.fire("EMPATE");
            finishGame(true);
        }
    };

    const updateTable = (index) => {
        if (tablegame[index] || isFinished) return; // Evita que se cambie una celda ya ocupada o si el juego ha terminado
        console.log("Connection String:", process.env.NEXT_PUBLIC_POSTGRES_URL);
        const newBoard = [...tablegame];
        newBoard[index] = turn;
        setTable(newBoard);
        
        changeTurn(turn === '⭕' ? '❌' : '⭕');
        checkWinner(newBoard);
    };

    return (
        <main className="flex flex-col items-center p-4">
            <div className="tablegame">
                <section className="game">
                    {tablegame.map((value, i) => (
                        <div className="cell grid grid-cols-3" key={i} onClick={() => !isFinished ? updateTable(i) : null}>
                            {value}
                        </div>
                    ))}
                </section>
            </div>
            <div className="turns mt-4">
                <Card>
                    <CardBody>
                        <p>Turno: {turn.toUpperCase()}</p>
                    </CardBody>
                </Card>
            </div>
        </main>
    );
}

export default TicTacToe;
