import express from "express";
import {
  createSudoku,
  getSudoku
} from "../controllers/sudokuController";

const router = express.Router();

router.route("/insert").post(createSudoku);
router.route("/:id").get(getSudoku);

export default router;
