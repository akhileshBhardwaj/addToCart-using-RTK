import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalPrice += newItem.price;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -= action.payload.price;
    },
  },
});

export const selectedCartItems = (state) => state.cart.items;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;

export const { addToCart, clearCart, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
