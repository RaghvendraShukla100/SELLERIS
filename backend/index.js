const mongoose = require("mongoose");
const Electronics = require("./models/Electronics");
const Clothing = require("./models/Clothing");
const HomeDecor = require("./models/HomeDecor");
const Furniture = require("./models/Furniture");
const BeautySkincare = require("./models/BeautySkincare");

mongoose
  .connect("mongodb://localhost:27017/yourDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Example usage
Electronics.find({}, (err, products) => {
  if (err) return console.error(err);
  console.log(products);
});
