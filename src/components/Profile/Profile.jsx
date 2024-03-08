import css from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img src={avatar} alt={username} width={250} className={css.profileImage} />
        <p className={css.profileUserName}>{username}</p>
        <p className={css.profileUserTag}>@{tag}</p>
        <p className={css.profileUserTag}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileSocialsStats}>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileSocialsStats}>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileSocialsStats}>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
