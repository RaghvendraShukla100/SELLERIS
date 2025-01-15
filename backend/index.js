import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // Import the cors package

import Electronics from "./models/Electronics.js";
import Clothing from "./models/Clothing.js";
import HomeDecor from "./models/HomeDecor.js";
import Furniture from "./models/Furniture.js";
import BeautySkincare from "./models/BeautySkincare.js";

import BeautySkincareData from "./DemoData/ProductListingData/BeautiAndSkinCareDemoData.json" assert { type: "json" };
import ClothingDemoData from "./DemoData/ProductListingData/ClothingDemoData.json" assert { type: "json" };
import ElectronicsDemoData from "./DemoData/ProductListingData/ElectronicsDemoData.json" assert { type: "json" };
import FurnituresDemoData from "./DemoData/ProductListingData/FurnituresDemoData.json" assert { type: "json" };
import HomeDecorDemoData from "./DemoData/ProductListingData/HomeDecoreDemoData.json" assert { type: "json" };
import BrandPosterData from "./DemoData/ProductListingData/BrandPosterData.json" assert { type: "json" };
import HomeDecorePageData from "./DemoData/ProductHompageData/homeDecorePageData.json" assert { type: "json" };

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.get("/api/products/furnitures", (req, res) => {
  res.json(FurnituresDemoData);
});

app.get("/api/products/beautiandskincare", (req, res) => {
  res.json(BeautySkincareData);
});

app.get("/api/products/clothing", (req, res) => {
  res.json(ClothingDemoData);
});

app.get("/api/products/electronics", (req, res) => {
  res.json(ElectronicsDemoData);
});

app.get("/api/products/homedecore", (req, res) => {
  res.json(HomeDecorDemoData);
});

app.get("/api/products/BrandPoster", (req, res) => {
  res.json(BrandPosterData);
});

app.get("/api/products/DecoreHomePage", (req, res) => {
  res.json(HomeDecorePageData);
});

mongoose
  .connect("mongodb://localhost:27017/yourDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`SERVER IS LISTENING AT ${port}`);
});
