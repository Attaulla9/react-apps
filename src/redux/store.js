import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./customers/customerSlice";
import accountReducer from "./accounts/accountSlice";
import productsReducer from "./producrts/productSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice,
    account: accountReducer,
    products: productsReducer,
  },
});

export default store;
