import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "../store/user/user.reducer";
import { categoriesReducer } from "../store/categories/category.reducer";
import { cartReducer } from "../store/cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
