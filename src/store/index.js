import { configureStore, createSlice } from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice';
import BagSlice from "./BagSlice";
import WishListSlice from './WishList';


const FoodStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    BagItems: BagSlice.reducer,
    WishList: WishListSlice.reducer
  }
})

export default FoodStore;