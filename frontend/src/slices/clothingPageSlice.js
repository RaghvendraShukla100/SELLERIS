import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};
const clothingPageSlice = createSlice({
  name: "clothingPageSlice",
  initialState,
  reducers: {
    addClothingPageData: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addClothingPageData } = clothingPageSlice.actions;
export default clothingPageSlice.reducer;
