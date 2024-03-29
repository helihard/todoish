import { useState } from "react";

function AddTaskForm({ onSubmit }) {
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(description);

    setDescription("");
  }
  return (
    <div id="dropdown">
      <form onSubmit={handleSubmit}>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Uppgift"
          autoFocus
          required
        />
        <div>
          <button>Avbryt</button>
          <button type="submit">Lägg till uppgift</button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskForm;
