import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext.jsx";

function AddTodoForm({ onSubmit }) {
  const [description, setDescription] = useState("");
  const { setDropdownShow } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description.trim()) return;

    onSubmit(description);

    setDescription("");
    setDropdownShow(false);
  }

  return (
    <div id="dropdown">
      <form onSubmit={handleSubmit}>
        <input
          name="add-todo"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          autoFocus
        />
        <div>
          <button
            type="submit"
            id="submit-todo"
            disabled={description.length === 0}
          >
            Lägg till uppgift
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodoForm;
