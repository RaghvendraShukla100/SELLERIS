// /backend/middleware/cacheMiddleware.js

import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

export const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;

  const cachedData = cache.get(key);
  if (cachedData) {
    return res.json(cachedData);
  }

  res.sendResponse = res.json;
  res.json = (data) => {
    cache.set(key, data);
    res.sendResponse(data);
  };

  next();
};
