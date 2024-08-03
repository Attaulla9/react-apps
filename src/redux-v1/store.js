import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customers/customerSlice";
import accountReducer from "./accounts/accountSlice";
import productsReducer from "./producrts/productSlice";

configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
    products: productsReducer,
  },
});

export default store;
