import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
});

export const Book = mongoose.model("Book", bookSchema);
