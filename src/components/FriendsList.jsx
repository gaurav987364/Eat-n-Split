import React from "react";
import Friend from "./Friend";
import { Link } from "react-router-dom";

const FriendsList = ({ friends, handelSelected }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handelSelected={handelSelected}
        />
      ))}
      <Link
        to="formaddfriend"
        className=" ml-6 rounded-lg px-4 py-1  bg-orange-400"
      >
        Add Freind
      </Link>
    </div>
  );
};

export default FriendsList;
