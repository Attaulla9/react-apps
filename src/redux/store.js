import { combineReducers, createStore } from "redux";
import customerReducer from "./customers/customerSlice";
import accountReducer from "./accounts/accountSlice";


const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(rootReducer);

export default store




