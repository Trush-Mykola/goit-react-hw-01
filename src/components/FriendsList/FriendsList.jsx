import FriendsListItem from "./FriendsListItem";
import css from "./FriendsList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => {
        return <FriendsListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

export default FriendList;
