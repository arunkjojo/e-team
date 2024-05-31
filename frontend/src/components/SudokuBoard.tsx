import React, { useState } from 'react';

interface SudokuBoardProps {
    onBoardChange: (newBoard: number[][]) => void;
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({ onBoardChange }) => {
    // Initialize the Sudoku board state
    const [board, setBoard] = useState<number[][]>([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    // Function to handle input change
    const handleChange = (value: number, row: number, col: number) => {
        const newBoard = [...board];
        newBoard[row][col] = value;
        setBoard(newBoard);
        onBoardChange(newBoard);
    };

    // Generate the Sudoku board JSX
    const renderBoard = () => {
        return (
            <table>
                <tbody>
                    {board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => (
                                <td key={`${i}_${j}`} className='border-1'>
                                    <input
                                        type="number"
                                        min="1"
                                        max="9"
                                        value={cell || ''}
                                        onChange={(e) => handleChange(Number(e.target.value), i, j)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return renderBoard();
};

export default SudokuBoard;
