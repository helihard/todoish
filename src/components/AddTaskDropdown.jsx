import AddTaskForm from "./AddTaskForm.jsx";

function AddTaskDropdown() {
  const postTodo = async (description) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AddTaskForm onSubmit={postTodo} />
    </>
  );
}

export default AddTaskDropdown;
