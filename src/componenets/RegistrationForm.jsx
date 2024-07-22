import { useState } from "react";

export function RegistrationForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formFields.username, formFields.password, formFields.email);
//   };

  return (
    <div>
      <form>
        {console.log(formFields)}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formFields.username}
            onChange={(e) =>
              setFormFields((currentState) => {
                return { ...currentState, username: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={formFields.email}
            onChange={(e) =>
              setFormFields((currentState) => {
                return { ...currentState, email: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={formFields.password}
            onChange={(e) =>
              setFormFields((currentState) => {
                return { ...currentState, password: e.target.value };
              })
            }
          />
        </div>
        {/* <button type="submit">Add User</button> */}
      </form>
      <h1>{formFields.username}</h1>
      <h1>{formFields.email}</h1>
      <h1>{formFields.password}</h1>
    </div>
  );
}
