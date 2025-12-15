import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ TOGGLE FAVORITE (ADD or REMOVE)
router.post("/toggle", async (req, res) => {
  try {
    const { userId, placeId } = req.body;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    const isFavorite = user.favorites.includes(placeId);

    if (isFavorite) {
      // 💔 REMOVE FAVORITE
      await User.findByIdAndUpdate(userId, {
        $pull: { favorites: placeId },
      });

      return res.json({ message: "Removed from favorites", status: "removed" });
    } else {
      // ❤️ ADD FAVORITE
      await User.findByIdAndUpdate(userId, {
        $addToSet: { favorites: placeId },
      });

      return res.json({ message: "Added to favorites", status: "added" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET USER FAVORITES (FOR FAVORITE PAGE)
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("favorites");
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
