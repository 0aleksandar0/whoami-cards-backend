import mongoose from "mongoose";

// This is how the database fills are gonna be built up
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", cardSchema); // cards is the name of the collection and pass in the cards Schema
