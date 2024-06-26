import { createContext, useState, useEffect } from "react";
import Modal from "react-modal";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [currentTodoDescription, setCurrentTodoDescription] = useState("");
  const [dropdownShow, setDropdownShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
          done: false,
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

    let updatedDescription = currentTodoDescription.trim();
    let originalDescription;

    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        originalDescription = todo.description;
        if (updatedDescription.length === 0) {
          updatedDescription = originalDescription;
        }
        return { ...todo, description: updatedDescription };
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
        body: JSON.stringify({ description: updatedDescription }),
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

  async function deleteTodo(id) {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Det gick inte att slutföra åtgärden");
      }
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  function toggleDropdownDiv() {
    setDropdownShow((dropdownShow) => !dropdownShow);
  }

  const openModal = () => {
    Modal.setAppElement("#container");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        deleteTodo,
        dropdownShow,
        setDropdownShow,
        toggleDropdownDiv,
        modalOpen,
        setModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
