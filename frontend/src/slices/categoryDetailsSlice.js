import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiLink: null,
  subCategory: null,
  productType: null,
};

const categoryDetailsSlice = createSlice({
  name: "categoryDeetailsSlice",
  initialState,
  reducers: {
    addApiLink: (state, action) => {
      state.apiLink = action.payload;
    },
    addSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
    addProductType: (state, action) => {
      state.productType = action.payload;
    },
  },
});
export const { addApiLink, addSubCategory, addProductType } =
  categoryDetailsSlice.actions;
export default categoryDetailsSlice.reducer;
