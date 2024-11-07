import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormSplitBill = ({ selected, handleSplit }) => {
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [expense, setExpense] = useState(0);

  const onSubmit = (data) => {
    const billValue = parseFloat(data.billValue);
    const yourExpense = parseFloat(data.yourExpense);
    const whoPays = parseFloat(data.whoPays);

    // Calculate the selected user's expense
    const xExpense = billValue - yourExpense;

    // Set the calculated expense in the state
    setExpense(xExpense);

    // Set the calculated expense in the form to display it in the UI
    setValue("xExpense", xExpense);

    if(! billValue || ! yourExpense) return;
    handleSplit(whoPays === "user" ? xExpense : -yourExpense)
    console.log({ ...data, xExpense });
    navigate("/")
  };

  return (
    <form
      className="max-w-lg mx-auto bg-yellow-100 shadow-lg rounded-lg p-8 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Split a bill with {selected?.name}
      </h2>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          💰 Bill Value
        </label>
        <input
          type="number"
          placeholder="Enter total bill value"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          {...register("billValue", { required: true })}
        />
        {errors.billValue && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          🛒 Your Expense
        </label>
        <input
          type="number"
          placeholder="Enter your expense"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          {...register("yourExpense", { required: true })}
        />
        {errors.yourExpense && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          🧑‍🤝‍🧑 {selected?.name} Expense
        </label>
        <input
          type="number"
          placeholder="Enter expense"
          disabled
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          {...register("xExpense")}
          value={expense}
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Who Pays the Bill?
        </label>
        <select
          className="px-3 py-1 border border-black rounded-md"
          {...register("whoPays", { required: true })}
        >
          <option value="user">You</option>
          <option value="friend">Friend</option>
        </select>
        {errors.whoPays && (
          <p className="text-red-500 text-sm">This field is required</p>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="reset"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Split Bill
        </button>
      </div>
    </form>
  );
};

export default FormSplitBill;
