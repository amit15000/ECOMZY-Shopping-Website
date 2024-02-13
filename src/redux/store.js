import { configureStore } from "@reduxjs/toolkit";
import { cartManager } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartManager,
  },
});
