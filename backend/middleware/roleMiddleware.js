export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin" && req.user.role !== "superadmin") {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};

export const isSeller = (req, res, next) => {
  if (req.user.role !== "seller") {
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};
