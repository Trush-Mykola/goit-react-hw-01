import css from "./FriendsList.module.css";
import clsx from "clsx";

const FriendsListItem = ({ friend }) => {
  return (
    <li className={css.friendsListItem}>
      <img src={friend.avatar} alt={friend.name} width={100} className={css.friendImg} />
      <p className={css.friendName}>{friend.name}</p>
      <p
        className={clsx(css.status, {
          [css.friendStatusOnline]: friend.isOnline,
          [css.friendStatusOffline]: !friend.isOnline,
        })}
      >
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendsListItem;
