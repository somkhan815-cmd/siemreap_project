import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ✅ REGISTER
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, username, email, phone, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      phone,
      passwordHash,
    });

    await user.save();
    res.json({ message: "Register successful" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ LOGIN
router.post("/login", async (req, res) => {
  try {
    const { input, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: input }, { phone: input }],
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ VERY IMPORTANT
export default router;
