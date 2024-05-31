import { Request, Response, NextFunction } from 'express';
import Sudoku from "../models/sudokuModels";

export const createSudoku = async (req: Request, res: Response, next: NextFunction) => {
    const { id, puzzle } = req.body;
    try {
        if (!id) {
            res.status(400);
            throw new Error("Id is mandatory");
        } if (!puzzle) {
            res.status(400);
            throw new Error("Puzzle field is mandatory");
        }

        const sudoku = await Sudoku.create({
            item_id: id,
            puzzle
        });
        res.status(201).json(sudoku);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const getSudoku = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    if (!id) {
        res.status(500).send('ID Error');
    }
    try {
        const sudoku = await Sudoku.find({ item_id: id }).sort({ _id: -1 }).limit(1);
        if (!sudoku) {
            res.status(400);
            throw new Error("Sudoku not found");
        }
        res.status(200).json(sudoku);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};