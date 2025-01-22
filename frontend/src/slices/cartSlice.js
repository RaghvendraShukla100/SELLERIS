import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    incrementCartQuantity: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCartQuantity: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementCartQuantity,
  decrementCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
