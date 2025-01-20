import { configureStore } from "@reduxjs/toolkit";
import productListingReducer from "../slices/productListingSlice";
import clothingPageReducer from "../slices/clothingPageSlice";
import categoryDetailsReducer from "../slices/categoryDetailsSlice";

export const store = configureStore({
  reducer: {
    productListing: productListingReducer,
    clothingProducts: clothingPageReducer,
    catDetails: categoryDetailsReducer,
  },
});
