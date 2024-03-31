import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext.jsx";

function AddTodoForm({ onSubmit }) {
  const [description, setDescription] = useState("");
  const { setModalOpen, closeModal } = useContext(TodoContext);

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(description);

    setDescription("");
    setModalOpen(false);
  }

  return (
    <>
      <i className="fa-solid fa-circle-xmark x-icon" onClick={closeModal}></i>
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
              disabled={description.trim().length === 0}
            >
              Lägg till uppgift
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodoForm;
