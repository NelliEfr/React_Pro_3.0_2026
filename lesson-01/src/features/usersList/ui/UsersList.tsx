import styles from "./UsersList.module.css";
import type { User } from 'entities/user';
import { UserCard } from 'entities/user';

type Props = {
    users: User[]
};

export function UsersList({ users }: Props) {
    return (
      <div className={styles.users}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
}