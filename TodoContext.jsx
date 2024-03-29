import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [currentTodoDescription, setCurrentTodoDescription] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const result = await response.json();
      setTodos(result);
    } catch (error) {
      console.log("Det gick inte att hämta uppgifter", error);
    }
  }

  async function addTodo(description) {
    try {
      const response = await fetch("http://localhost:3000/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Det gick inte att lägga till uppgiften");
      }

      const newTodo = await response.json();
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      console.error(error);
    }
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
    <TodoContext.Provider
      value={{
        todos,
        editableTodoId,
        currentTodoDescription,
        setCurrentTodoDescription,
        fetchTodos,
        addTodo,
        updateTodoStatus,
        handleTodoClick,
        handleTodoBlur,
        handleTodoKeyDown,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
