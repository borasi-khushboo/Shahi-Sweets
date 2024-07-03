import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "WishList",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      if (!state.some(product => product.id === action.payload.product.id)) {
        state.push(action.payload.product);
      }

    },
    removeFromWishList: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    }
  }
});
export const WishListActions = WishListSlice.actions;
export default WishListSlice;

