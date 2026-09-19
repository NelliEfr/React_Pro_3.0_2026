import { useState } from "react";
import type { User } from "entities/user";

const initialUsers: User[] = [
  { id: 1, firstName: "Alice", age: 22 },
  { id: 2, firstName: "Bob", age: 30 },
  { id: 3, firstName: "Charlie", age: 25 },
  { id: 4, firstName: "David", age: 27 },
];

export function useUsersList() {
    const [users] = useState<User[]>(initialUsers);

    return {
      users
    };
}
