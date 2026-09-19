import type { User } from "../model/types";
import styles from "./UserCard.module.css";

type Props = {
  user: User,
};
  
export function UserCard({ user }: Props) {
    return (
      <div className={styles.card}>
        <p>{user.firstName}</p> 
        <p>{user.age} y.o.</p>
      </div>
    );
}