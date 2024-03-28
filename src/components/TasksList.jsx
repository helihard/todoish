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

  async function updateTodoStatus(id, checked) {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: checked }),
      });

      if (!response.ok) {
        throw new Error("Det gick inte att slutföra åtgärden");
      }

      const updatedTodo = await response.json();

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            id={todo.id}
            type="checkbox"
            className="todo-checkbox"
            checked={todo.done}
            onChange={(event) =>
              updateTodoStatus(todo.id, event.target.checked)
            }
          />
          &nbsp;
          <label
            htmlFor={todo.id}
            className={
              "todo-checkbox-label " + (todo.done ? "todo-checked-off" : "")
            }
          >
            {todo.description}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TasksList;
