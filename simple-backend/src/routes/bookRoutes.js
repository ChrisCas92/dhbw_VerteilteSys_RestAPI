import express from "express";
import {
  getBooks,
  getBookById,
  getBookByTitle,
  addBook,
  newBookValidators,
} from "../controllers/bookControllers.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/search", getBookByTitle);
router.get("/:id", getBookById);
router.post("/add", newBookValidators, addBook);

export default router;
