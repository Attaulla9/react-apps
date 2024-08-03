import { createSlice } from "@reduxjs/toolkit";
const CUSTOMER_INITIAL_STATE = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  numberOfUPdate: 0,
  currency: "GBC",
  isLoading: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState: CUSTOMER_INITIAL_STATE,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload.amount;
    },
    update: {
      prepare(rates, currencyCON) {
        return {
          payload: { rates, currencyCON },
        };
      },
      reducer(state, action) {
        (state.numberOfUPdate = action.payload.rates),
          (state.currency = action.payload.currencyCON);
          (state.isLoading = false)
      },
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return;
      (state.loan = action.payload.amount),
        (state.loanPurpose = action.payload.loanPurpose);
    },
    payloan(state) {
      (state.loan = 0), (state.balance -= state.loan);
    },
    isloading(state) {
      state.isLoading = true;
    },
  },
});

export const {
  deposit,
  isloading,
  payloan,
  requestLoan,
  withdraw,
} = customerSlice.actions;

export const update = (amount, currency) => {
  if (currency === "USD")
    return {
      type: "customer/update",
      payload: { amount, currency },
    };
  return async function(dispatch, getState) {
    dispatch({ type: "customer/isloading" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const response = await data;
    const rates = response.rates.USD;
    const currencyCON = response.base;
    dispatch({
      type: "customer/update",
      payload: { rates, currencyCON },
    });
  };
};
export default customerSlice.reducer;
