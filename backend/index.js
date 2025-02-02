// /backend/index.js

import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import apiRoutes from "./routes/index.js"; // Import the main router

const app = express();
const port = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shuklaraghvendra76:xxCMXl6kRyQFZ9sL@selleris-data.pjmv7.mongodb.net/SELLERIS?retryWrites=true&w=majority&appName=selleris-data"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err)); // Corrected catch block

// Use API routes
app.use("/api", apiRoutes); // All routes under /api will be handled by apiRoutes

// Start the server
app.listen(port, () => {
  console.log(`SERVER IS LISTENING AT ${port}`);
});
