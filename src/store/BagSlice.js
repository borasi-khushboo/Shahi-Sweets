import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "BagItems",
  initialState: {},
  reducers: {
    addToBag: (state, action) => {
      const id = action.payload.product.id;
      if (!state[id]) {
        state[id] = { ...action.payload.product, quantity: 1 };
      } else {
        state[id].quantity += 1;
      }
    },
    removeFromBag: (state, action) => {
      const id = action.payload.product.id;
      if (state[id]) {
        if (state[id].quantity > 1) {
          state[id].quantity -= 1;
        } else {
          delete state[id];
        }
      }
    },
    deleteFromBag: (state, action) => {
      delete state[action.payload.product.id];


    },
    emptyBag: () => {
      return {};
    }
  }

});

export default BagSlice;
export const BagActions = BagSlice.actions;
