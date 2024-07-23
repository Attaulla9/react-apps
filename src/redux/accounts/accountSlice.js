const ACCOUNT_INITIAL_STATE = {
  fullName: "",
  nationId: "",
  createdAt: "",
  isUpdateAccount: false,
  updateAccountTime: "",
};

//Reducer fucntion for the Account
export default function accountReducer(state = ACCOUNT_INITIAL_STATE, action) {
  switch (action.type) {
    case "account/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationId: action.payload.nationId,
        createdAt: action.payload.createdAt,
      };
    case "account/updateAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationId: action.payload.nationId,
        isUpdateAccount: action.payload.isUpdateAccount,
        updateAccountTime: action.payload.updateAccountTime,
      };
    default:
      return state;
  }
}

//Action function for the Account reducer
export const createAccount = (fullName, nationId) => {
    return {
      type: "account/createAccount",
      payload: {
        fullName,
        nationId,
        createdAt: new Date().toISOString(),
      },
    };
  };
  
  export const updateAccount = (fullName, nationId) => {
    return {
      type: "account/updateAccount",
      payload: {
        fullName,
        nationId,
        updateAccountTime: new Date().toISOString(),
        isUpdateAccount: true,
      },
    };
  };