import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendsListItem}>
      <img src={avatar} alt={name} width={100} className={css.friendImg} />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.friendStatusOnline]: isOnline,
          [css.friendStatusOffline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendsListItem;
