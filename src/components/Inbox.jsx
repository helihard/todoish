import TodoList from "./TodoList.jsx";
import AddTodoDropdown from "./AddTodoDropdown.jsx";

function Inbox() {
  return (
    <main>
      <h1>Inkorg</h1>
      <div id="todos-list">
        <div>
          <TodoList />
          <div className="add-todo-from-main" id="hover-effect">
            <p id="circle">
              <i className="fas fa-solid fa-plus" id="plus-sign-icon"></i>
            </p>
            <span>Lägg till uppgift</span>
          </div>
          <AddTodoDropdown />
        </div>
      </div>
    </main>
  );
}
export default Inbox;
