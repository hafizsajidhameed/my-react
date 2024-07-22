import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  function createTodo() {
    setTodos((oldTodos) => {
      return [...oldTodos, task];
    });
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={createTodo}>Submit</button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
