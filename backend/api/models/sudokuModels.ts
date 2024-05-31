import mongoose from "mongoose";

const sudokuSchema = new mongoose.Schema(
    {
        item_id: {
            type: Number,
            required: true,
        },
        puzzle: {
            type: String,
            required: true,
        }
    }
);
const Sudoku = mongoose.model("sudokus", sudokuSchema);

export default Sudoku;