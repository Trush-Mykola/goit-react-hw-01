import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../Profile/userData.json";
import friendsData from "../FriendList/friendsData.json";
import transactionHistory from "../TransactionHistory/transactionHistoryData.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile {...userData} />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionHistory} />
    </>
  );
};

export default App;
