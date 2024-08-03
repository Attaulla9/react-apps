const CUSTORMER_INITIAL_STATE = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  numberOfUPdate: 0,
  currency: "GBC",
  isLoading: false,
};

//Reducer for the Customer
export default function customerReducer(
  state = CUSTORMER_INITIAL_STATE,
  action
) {
  switch (action.type) {
    case "customer/deposit":
      return { ...state, balance: state.balance + action.payload.amount };
    case "customer/update":
      return {
        ...state,
        numberOfUPdate: action.payload.rates,
        currency: action.payload.currencyCON,
        isLoading: false,
      };
    case "customer/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "customer/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
      };
    case "customer/payloan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "customer/isloading":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

//Action for cutomer
export const deposit = (amount, currency) => {
  if (currency === "USD")
    return {
      type: "customer/deposit",
      payload: { amount: amount },
    };
};
export const numberOfUPdates = (amount, currency) => {
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
    const currencyCON =response.base
    return {
      type: "customer/update",
      payload: { rates, currencyCON},
    };
  };
};

export const withdraw = (amount) => {
  return {
    type: "customer/withdraw",
    payload: amount,
  };
};
export const requestLoan = (amount, loanPurpose) => {
  return {
    type: "customer/requestLoan",
    payload: { amount, loanPurpose },
  };
};

export const payloan = () => {
  return {
    type: "customer/payloan",
  };
};
