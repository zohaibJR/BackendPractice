import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";
import playerRoutes from "./routes/playerRoutes.js";

/* -------------------- CONFIGURATION -------------------- */

dotenv.config();

// FIX: Ensure database connects before server runs
connectDB();

/* -------------------- APP INITIALIZATION -------------------- */

const app = express();

/* -------------------- MIDDLEWARE -------------------- */

// FIX: Added CORS to allow frontend requests
app.use(cors());

// FIX: Allow JSON body parsing
app.use(express.json());

/* -------------------- ROUTES -------------------- */

// FIX: User API routes
app.use("/api/users", userRoutes);
app.use("/api/players", playerRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "API is running successfully 🚀"
  });
});

/* -------------------- SERVER -------------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});