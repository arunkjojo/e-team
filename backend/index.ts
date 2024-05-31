import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConnection";
import sudokuRouter from "./routers/sudokuRouter";
import errorHandler from "./middlewares/errorHandler";
import corsOptions from './utils/corsConfig';

dotenv.config();

connectDb();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/sudoku", sudokuRouter);
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to Sudoku API" });
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));