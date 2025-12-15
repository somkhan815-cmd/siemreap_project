import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import favoriteRoutes from "./routes/favorite.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/favorite", favoriteRoutes);

// ✅ FAVORITE MICROSERVICE PORT
app.listen(5002, () => {
  console.log("✅ Favorite Service running on port 5002");
});
