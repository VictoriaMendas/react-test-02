import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.box}>
      <img src={avatar} alt="Avatar" width="48" className={css.img} />

      <p>{name}</p>
      <p className={clsx(css.status, isOnline ? css.on : css.off)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
