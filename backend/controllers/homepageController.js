import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import logger from "../utils/logger.js";

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cache to store loaded data
const homepageDataCache = {};

// Get homepage section data
export const getHomepageSection = async (req, res) => {
  const section = req.params.section.toLowerCase();

  try {
    if (homepageDataCache[section]) {
      logger.info(`Homepage section served from cache: ${section}`);
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

    logger.info(`Homepage section fetched: ${section}`);
    res.json(parsedData);
  } catch (error) {
    logger.error(`Error fetching homepage section: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

// Refresh homepage cache
export const refreshHomepageCache = async (req, res) => {
  const { section } = req.body;

  try {
    if (!homepageDataCache[section]) {
      return res.status(404).json({ error: "Section not found in cache" });
    }

    delete homepageDataCache[section];
    logger.info(`Homepage cache refreshed for section: ${section}`);
    res.json({ message: "Cache refreshed successfully" });
  } catch (error) {
    logger.error(`Error refreshing homepage cache: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};
