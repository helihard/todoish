import { useState, useEffect } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodoDescription, setCurrentTodoDescription] = useState("");
  const [editableTodoId, setEditableTodoId] = useState(null);

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

  const handleTodoClick = (id) => {
    setEditableTodoId(id);

    const todo = todos.find((todo) => todo.id === id);
    setCurrentTodoDescription(todo.description);
  };

  const handleTodoBlur = async (id) => {
    setEditableTodoId(null);

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, description: currentTodoDescription };
      }
      return todo;
    });

    setTodos(updatedTodos);

    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({ description: currentTodoDescription }),
      });

      if (!response.ok) {
        throw new Error("Beskrivningen kunde inte uppdateras");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTodoKeyDown = (event, id) => {
    if (event.key === "Enter") {
      handleTodoBlur(id);
    }
  };

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
          <label htmlFor={todo.id} className="todo-checkbox-label"></label>
          <span
            className={"todo-span " + (todo.done ? "todo-checked-off" : "")}
            onClick={() => handleTodoClick(todo.id)}
          >
            {editableTodoId === todo.id ? (
              <input
                type="text"
                value={currentTodoDescription}
                onChange={(event) =>
                  setCurrentTodoDescription(event.target.value)
                }
                onBlur={() => handleTodoBlur(todo.id)}
                onKeyDown={(event) => handleTodoKeyDown(event, todo.id)}
                autoFocus
              />
            ) : (
              <>{todo.description}</>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
