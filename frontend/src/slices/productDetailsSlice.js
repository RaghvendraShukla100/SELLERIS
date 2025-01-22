import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
const productDetailsSlice = createSlice({
  name: "productDetailsSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addProduct } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
