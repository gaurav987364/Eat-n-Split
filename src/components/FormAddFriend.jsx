/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormAddFriend = ({ handelSetuser }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const userSubmit = (data) => {
    handelSetuser(data);
    navigate("/");
  };
  return (
    <form
      onSubmit={handleSubmit(userSubmit)}
      className="max-w-md mx-auto bg-yellow-100 shadow-md rounded-lg p-6 space-y-6"
    >
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter friend's name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          User Id
        </label>
        <input
          type="number"
          {...register("id")}
          value={Math.random()} //alternate method of genetaing random id in the broweser is crypto.randomuuid()
          placeholder="Enter friend's Id"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Image
          </label>
          <input
            type="text"
            {...register("image")}
            placeholder="Enter friend's image URL"
            value={`https://i.pravatar.cc/${
              Math.floor(Math.random() * 21) + 50
            }`} //fake avatar api
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Balance
        </label>
        <input
          type="number"
          {...register("balance")}
          value={"0"} //alternate method of genetaing random id in the broweser is crypto.randomuuid()
          placeholder="Enter friend's Id"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="reset"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancel.
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-blue-600"
        >
          Add Friend.
        </button>
      </div>
    </form>
  );
};

export default FormAddFriend;
