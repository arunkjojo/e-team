import { useEffect, useState } from "react";
import { ISudokku } from "../interfaces";
import axios from "axios";
import { Link } from "react-router-dom";
import SudokuBoard from "./SudokuBoard";

const Sudoku = () => {
    const date = new Date();
    const [sudoku, setSudoku] = useState<ISudokku | null>(null);
    const [id, setId] = useState<number | null>(null);
    const [isRedirect, setIsRedirect] = useState<boolean>(false);
    const [boardData, setBoardData] = useState<number[][] | null>(null);

    useEffect(() => {
        const sampleData = {
            id: date.getTime(),
            puzzle: boardData,
        };
        const sampleSudoku: ISudokku = {
            id: sampleData.id,
            puzzle: JSON.stringify(sampleData.puzzle)
        }

        setSudoku(sampleSudoku);
    }, [boardData]);

    const handleBoardChange = (newBoard: number[][]) => {
        setBoardData(newBoard);
    };

    const handleInsert = async () => {
        if (!boardData) return alert("Enter the sudoku number");;

        try {
            await axios.post('http://localhost:5000/api/sudoku/insert', sudoku);
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    const handleSubmit = async () => {
        if (!boardData) return alert("Enter the sudoku number");

        try {
            const response = await axios.post('http://localhost:5000/api/sudoku/insert', sudoku);
            console.log('Data inserted successfully:', response.data.item_id);
            setId(response.data.item_id);
            setIsRedirect(true);
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };
    return (
        <main className="mt-2 d-flex justify-content-center text-center flex-column p-5">
            <h1>Sudoku Game</h1>



            {isRedirect ?
                <div className="d-flex justify-content-center gap-2">
                    <h5>Sudoku link</h5>
                    <Link to={`/view/${id}`}>View sudoku</Link>
                </div>
                :
                <><SudokuBoard onBoardChange={handleBoardChange} />
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-warning" onClick={handleInsert}>Validate</button>
                        <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                    </div></>
            }
        </main>
    );
}

export default Sudoku
