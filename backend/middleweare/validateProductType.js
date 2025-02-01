// /backend/middleware/validateProductType.js

export const validateProductType = (req, res, next) => {
  const validProductTypes = [
    "clothing",
    "electronics",
    "beautyskincare",
    "furniture",
    "homedecor",
  ];

  const productType = req.params.productType.toLowerCase();

  if (!validProductTypes.includes(productType)) {
    return res.status(400).json({ error: "Invalid product type" });
  }

  next();
};
