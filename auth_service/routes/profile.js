import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ EDIT PROFILE
router.put("/edit/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Profile Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ VERY IMPORTANT
export default router;
