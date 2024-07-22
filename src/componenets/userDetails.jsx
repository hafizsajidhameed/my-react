import { useState } from "react";
import PropTypes from "react";

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  console.log(isEditing);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button>Delete</button>
        <button
          onClick={() => {
            // console.log(user);
            setUsers((currentUserState) => {
              return currentUserState.map((currentUser) => {
                if (currentUser.id === user.id) {
                  return { ...currentUser, username, email };
                }
                else return currentUser;
              });
            });
            setIsEditing(false)
          }}
        >
          Save
        </button>
      </div>
      <div>
        <b>ID:</b>
        <span>{user.id}</span>
        <br />
        <b>Username:</b>
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email:</b>
        {isEditing ? (
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        ) : (
          <span>{user.email}</span>
        )}
        <br />
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
