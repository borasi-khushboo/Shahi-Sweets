import { createSlice } from "@reduxjs/toolkit";
import { products } from '../data/items'



const itemsSlice = createSlice({
  name: "items",
  initialState: { products: products, currentItem: {} },
  reducers: {
    getCurrentItem: (state, action) => {
      state.currentItem = { ...action.payload.product };

    }
  }

})


export const itemActions = itemsSlice.actions;
export default itemsSlice;