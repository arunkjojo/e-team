import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SudokuItem from './SudokuItem';

const ViewSudoku = () => {
    const { id } = useParams<{ id: string }>();
    const [sudoku, setSudoku] = useState<any>([]);
    useEffect(() => {
        const fetchSudoku = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/sudoku/${id}`);
                console.log('Data:', response.data);
                setSudoku(response.data);
            } catch (error) {
                console.error('Error inserting data:', error);
            }
        }
        if (id) fetchSudoku()
    }, [id]);
    if (sudoku.length === 0) return null;
    return (
        <div>
            {sudoku.length > 0 && sudoku.map((item: { _id: React.Key | null | undefined; item_id: number; puzzle: string, __v: number }) => (
                <div key={item._id}>
                    <SudokuItem array={JSON.parse(item.puzzle)} />
                </div>
            ))}
        </div>
    )
}

export default ViewSudoku

