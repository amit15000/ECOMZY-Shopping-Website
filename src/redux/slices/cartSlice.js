import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: [],
  reducers: {
    add: () => {
      console.log("Add product");
    },
    remove: () => {
      console.log("Remove product");
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
