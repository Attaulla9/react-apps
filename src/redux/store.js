import { combineReducers, createStore } from "redux";
import customerReducer from "./customers/customerSlice";
import accountReducer from "./accounts/accountSlice";
import productsReducer from "./producrts/productSlice";


const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
  products: productsReducer
});

const store = createStore(rootReducer);

export default store




