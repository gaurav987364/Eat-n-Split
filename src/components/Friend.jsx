import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend, handelSelected }) => {
  return (
    <>
      <div className=" w-full flex justify-between items-center p-5">
        <div className=" flex gap-4 items-center">
          <div className=" w-14 h-14 rounded-full flex items-center gap-5 overflow-hidden bg-red-200">
            <img
              className=" w-full h-full object-cover"
              src={friend.image}
              alt="image"
            />
          </div>
          <div>
            <h2 className=" text-xl font-semibold">{friend.name}</h2>
            <span>
              {friend.balance < 0 && (
                <p className=" text-red-600 text-sm">
                  You Have to Pay {Math.abs(friend.balance)} to {friend.name}
                </p>
              )}
              {friend.balance > 0 && (
                <p className=" text-green-600 text-sm">
                  Get your {friend.balance} return from {friend.name}{" "}
                </p>
              )}
              {friend.balance === 0 && (
                <p className=" text-black font-semibold text-sm">
                  {" "}
                  You Have no Dues of {friend.name}{" "}
                </p>
              )}
            </span>
          </div>
        </div>

        <Link
          to="/formsplitbill"
          onClick={() => handelSelected(friend)}
          className=" px-4 py-1 border border-black rounded-md bg-orange-400 border-none font-semibold"
        >
          Select
        </Link>
      </div>
    </>
  );
};

export default Friend;
