import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import Store from "./redux/store.js"
import App from "./App.jsx";
import "./index.css";

Store.dispatch({type: "account/createAccount",payload : {fullName: "Afnan Faniband",nationId: "21918272",
  createdAt: new Date().toISOString()}})
console.log(Store.getState())

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
