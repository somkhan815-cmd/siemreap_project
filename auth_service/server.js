import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// ✅ AUTH MICROSERVICE PORT
app.listen(5001, () => {
  console.log("✅ Auth Service running on port 5001");
});
