const CUSTORMER_INITIAL_STATE = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  numberOfUPdate:0
};

//Reducer for the Customer
export default function customerReducer(state = CUSTORMER_INITIAL_STATE, action) {
  switch (action.type) {
    case "customer/deposit":
      return { ...state, balance: state.balance + action.payload.amount };
      case "customer/update":
        return { ...state, numberOfUPdate: state.numberOfUPdate + 1 };
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
    default:
      return state;
  }
}

//Action for cutomer
export const deposit = (amount) => {
  return {
    type: "customer/deposit",
    payload: { amount: amount },
  };
};
export const numberOfUPdate = () => {
  return {
    type: "customer/update",
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
