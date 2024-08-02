import { useState } from "react";

const Account = () => {
  const [formData, setformData] = useState({
    deposit: 0,
    widthdraw: 0,
  });

  const options = [
    { value: 'flavor', label: 'flavor' },
    { value: 'yummy', label: 'yummy' },
    { value: 'red', label: 'red' },
    { value: 'green', label: 'green' },
    { value: 'yellow', label: 'yellow' },
];
  const [checked, setCheckboxes] = useState({});
  const handleChange = (event) => {
    debugger
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };


  const handleerSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
      <div className="w-full">
        <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form action="" onSubmit={handleerSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-bold text-gray-600"
              >
                Deposit
              </label>
              <input
                type="number"
                id="name"
                value={formData.deposit}
                onChange={(e) =>
                  setformData({ ...formData, deposit: e.target.value })
                }
                name="deposite"
                placeholder="Enter the amount"
                className="border border-gray-300 shadow p-3 w-full rounded"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="withdraw"
                className="block mb-2 font-bold text-gray-600"
              >
                Withdraw
              </label>
              <input
                type="number"
                id="twitter"
                name="withdraw"
                value={formData.widthdraw}
                onChange={(e) =>
                  setformData({ ...formData, widthdraw: e.target.value })
                }
                placeholder="Enter the amount"
                className="border border-red-300 shadow p-3 w-full rounded mb-"
              />
              <p className="text-sm text-red-400 mt-2">
                Twitter username is required
              </p>
            </div>
            <label
              htmlFor="currency"
              className="block mb-2 font-bold text-gray-600"
            >
              Currency
            </label>
            <input
              type="checkbox"
              id="currency"
              name="currency"
              checked={checked}
              onChange={handleChange}
            />
            <button className="block bg-blue-500 text-white font-bold p-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
