import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList({ friends }) {
  return (
    <div>
      <ul className={css.list}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={css.item}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
