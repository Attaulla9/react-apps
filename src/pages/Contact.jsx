import { useState } from "react";

import { update } from "../redux/customers/customerSlice";
import { useDispatch, useSelector } from "react-redux";

function Contact() {
  const [username, setUsername] = useState("");
  const [balance, setbalance] = useState("");

  const {numberOfUPdate,currency,isLoading} = useSelector((store) => store.customer);

  const dipatch = useDispatch();
  const handleSubmit = () => {
    dipatch(update(balance,"INR"));
    
    
  };
  return (
    <div>
      <p>Loading: {isLoading ? "loading": "false"}</p>
      <p>Balance: {balance}</p>
     <p> {numberOfUPdate}: {currency}</p>
      <div className="w-72">
        <input
          type="number"
          id="name"
          value={balance}
          onChange={(e) => setbalance(e.target.value)}
          className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Afnan"
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="mt-4 px-3 py-2 bg-red-500 text-white rounded-md focus:ring-2 dark:hover:bg-red-600 focus:outline-none"
      disabled={isLoading}>
        Submit
      </button>
      {numberOfUPdate > 0 ? numberOfUPdate : "store"}
    </div>
  );
}

export default Contact;
