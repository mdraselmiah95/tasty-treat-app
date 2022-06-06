import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartAction = cartUiSlice.actions;
export default cartUiSlice.reducer;