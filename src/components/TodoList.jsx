import { useContext } from "react";
import { TodoContext } from "../../TodoContext.jsx";

function TodoList() {
  const {
    todos,
    editableTodoId,
    currentTodoDescription,
    setCurrentTodoDescription,
    updateTodoStatus,
    handleTodoClick,
    handleTodoBlur,
    handleTodoKeyDown,
    deleteTodo,
  } = useContext(TodoContext);

  if (!todos.length) {
    return null;
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
          <span>
            <i
              className="fa-solid fa-trash"
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(todo.id)}
            ></i>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
