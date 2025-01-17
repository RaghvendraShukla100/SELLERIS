import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
const productListingSlice = createSlice({
  name: "productListingSlice",
  initialState,
  reducers: {
    addParameter: (state, action) => {
      state.value = action.payload;
    },
    removeParameter: (state) => {
      state.value = null;
    },
  },
});
export const { addParameter, removeParameter } = productListingSlice.actions;
export default productListingSlice.reducer;
