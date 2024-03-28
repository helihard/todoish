import TasksList from "./TasksList.jsx";
import AddTaskDropdown from "./AddTaskDropdown.jsx";

function Inbox() {
  return (
    <main>
      <h1>Inkorg</h1>
      <div id="tasks-list">
        <div>
          <TasksList />
          <div className="add-task-from-main" id="hover-effect">
            <button id="circle">
              <i className="fas fa-solid fa-plus" id="plus-sign-icon"></i>
            </button>
            <span>Lägg till uppgift</span>
          </div>
          <AddTaskDropdown />
        </div>
      </div>
    </main>
  );
}
export default Inbox;
