import { useState } from "react";
import { UserDetails } from "./userDetails";

export function UserDetailArray() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "John",
      email: "john@gmail.com",
    },
    {
      id: 2,
      username: "Jane",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      username: "Jack",
      email: "jack@gmail.com",
    }
  ]);
  return (
    <div>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers}/>
      ))}
    </div>
  );
}
