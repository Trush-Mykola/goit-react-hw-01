import FriendsListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map((friend) => {
        return <FriendsListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />;
      })}
    </ul>
  );
};

export default FriendList;
