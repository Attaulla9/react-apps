const PRODUCTS_INITIAL_STATE = {
  products: [],
  cart: [],
  cartCount: 0,
};

//Reducer for the Prodcuts
export default function productsReducer(
  state = PRODUCTS_INITIAL_STATE,
  action
) {
    console.log(action.payload)

  switch (action.type) {
    case "products/items":
      return { ...state, products: [...action.payload] };
    case "products/cart":
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
}

//Action for cutomer
export const items = (products) => {
  return {
    type: "products/items",
    payload: products,
  };
};
export const cart = (cart) => {
  return {
    type: "products/cart",
    payload: cart,
  };
};
