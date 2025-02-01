// /backend/controllers/homepageController.js

import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cache to store loaded data
const homepageDataCache = {};

export const getHomepageSection = async (req, res) => {
  const section = req.params.section.toLowerCase();

  try {
    if (homepageDataCache[section]) {
      // Serve from cache if available
      return res.json(homepageDataCache[section]);
    }

    let dataPath;

    switch (section) {
      case "brandposter":
        dataPath = path.join(__dirname, "../data/BrandPosterData.json");
        break;
      case "homedecorhomepage":
        dataPath = path.join(__dirname, "../data/HomeDecorHomePageData.json");
        break;
      case "menshomepage":
        dataPath = path.join(__dirname, "../data/MensHomePageData.json");
        break;
      case "womenhomepage":
        dataPath = path.join(__dirname, "../data/WomenHomePageData.json");
        break;
      case "electronicshomepage":
        dataPath = path.join(__dirname, "../data/ElectronicsHomePageData.json");
        break;
      case "beautyskincarehomepage":
        dataPath = path.join(
          __dirname,
          "../data/BeautySkincareHomePageData.json"
        );
        break;
      case "homepage":
        dataPath = path.join(__dirname, "../data/HomePageData.json");
        break;
      default:
        return res.status(404).json({ error: "Homepage section not found" });
    }

    // Read data from file
    const data = await fs.readFile(dataPath, "utf8");
    const parsedData = JSON.parse(data);

    // Store in cache
    homepageDataCache[section] = parsedData;

    res.json(parsedData);
  } catch (error) {
    console.error("Error reading homepage data:", error);
    res.status(500).json({ error: "Server error" });
  }
};
