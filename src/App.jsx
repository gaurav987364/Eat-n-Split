import  { useState } from "react";
import FriendsList from "./components/FriendsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

const fakeData = [
  {
    name: "Gaurav",
    id: 1,
    image:
      "https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-turkish-coffee.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    balance: -200,
  },
  {
    name: "Priya",
    id: 2,
    image:
      "https://images.pexels.com/photos/27367758/pexels-photo-27367758/free-photo-of-a-woman-in-a-blue-dress-and-black-shoes-is-walking-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    balance: 300,
  },
  {
    name: "Ankit",
    id: 3,
    image:
      "https://images.pexels.com/photos/22816074/pexels-photo-22816074/free-photo-of-young-woman-in-a-patterned-jacket-standing-against-a-brick-wall.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    balance: -150,
  },
  {
    name: "Rahul",
    id: 4,
    image:
      "https://images.pexels.com/photos/27044024/pexels-photo-27044024/free-photo-of-a-man-sitting-on-a-motorcycle-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    balance: 400,
  },
  {
    name: "Nikhil",
    id: 5,
    image:
      "https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-turkish-coffee.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    balance: 0,
  },
];

const App = () => {
  const [friends, setUsers] = useState(fakeData);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSetUser = (user) => {
    setUsers((prevFriends) => [...prevFriends, user]);
  };

  const handleSelected = (user) => {
    setSelectedFriend(user);
  };

  const handleSplit = (amount) => {
    if (!selectedFriend) return;
    
    setUsers(friends =>
      friends.map(friend =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + amount }
          : friend
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <FriendsList handleSelected={handleSelected} friends={friends} />
          }
        />
        <Route
          path="/formaddfriend"
          element={<FormAddFriend handleSetUser={handleSetUser} />}
        />
        <Route
          path="/formsplitbill"
          element={<FormSplitBill selectedFriend={selectedFriend} handleSplit={handleSplit} />}
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
