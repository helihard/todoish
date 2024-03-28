import { useState, useEffect } from "react";
function TasksList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const result = await response.json();
        setTodos(result);
      } catch (error) {
        console.log("Det gick inte att hämta uppgifter", error);
      }
    }
    fetchTodos();
  }, []);

  if (!todos.length) {
    return null;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input id={todo.id} type="checkbox" className="todo-checkbox" />
          &nbsp;
          <label htmlFor={todo.id} className="todo-checkbox-label">
            {todo.description}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
