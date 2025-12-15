import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  location: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Place", placeSchema);
