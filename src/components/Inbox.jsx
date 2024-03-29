import TodoList from "./TodoList.jsx";
import AddTodoDropdown from "./AddTodoDropdown.jsx";

function Inbox() {
  return (
    <main>
      <h1>Inkorg</h1>
      <div id="todos-list">
        <div>
          <TodoList />
          <AddTodoDropdown />
        </div>
      </div>
    </main>
  );
}
export default Inbox;
