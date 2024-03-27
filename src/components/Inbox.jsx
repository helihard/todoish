import AddTaskDropdown from "./AddTaskDropdown.jsx";

function Inbox() {
  return (
    <main>
      <h1>Inkorg</h1>
      <div id="tasks-list">
        <div>
          <ul>
            <li>
              <input
                id="radio-1"
                type="radio"
                name="radio-group"
                className="radio-check"
              />{" "}
              <label htmlFor="radio-1" className="radio-check-label">
                Dropdown i main
              </label>
            </li>
            <li>
              <input
                id="radio-2"
                type="radio"
                name="radio-group"
                className="radio-check"
              />{" "}
              <label htmlFor="radio-2" className="radio-check-label">
                Modal i sidebar
              </label>
            </li>
            <li>
              <input
                id="radio-3"
                type="radio"
                name="radio-group"
                className="radio-check"
              />{" "}
              <label htmlFor="radio-3" className="radio-check-label">
                Mockdata
              </label>
            </li>
            <li>
              <input
                id="radio-4"
                type="radio"
                name="radio-group"
                className="radio-check"
              />{" "}
              <label htmlFor="radio-4" className="radio-check-label">
                Databas
              </label>
            </li>
          </ul>
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
