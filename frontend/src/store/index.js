import { configureStore } from "@reduxjs/toolkit";
import productListingReducer from "../slices/productListingSlice";

export const store = configureStore({
  reducer: {
    productListing: productListingReducer,
  },
});
