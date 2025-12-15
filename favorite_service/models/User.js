import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,

  email: { type: String, unique: true },
  phone: { type: String, unique: true },

  passwordHash: String,
  pinHash: String,

  gender: String,

  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Place" }],

  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);
export default User;
