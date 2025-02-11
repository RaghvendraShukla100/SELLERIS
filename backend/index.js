// Import necessary modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import apiRoutes from "./routes/index.js"; // Import the main router
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use API routes
app.use("/api", apiRoutes); // All routes under /api will be handled by apiRoutes

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
