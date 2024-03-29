import { useContext } from "react";
import { TodoContext } from "../../TodoContext.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

function AddTodoDropdown() {
  const { addTodo } = useContext(TodoContext);

  return (
    <>
      <AddTodoForm onSubmit={addTodo} />
    </>
  );
}

export default AddTodoDropdown;
