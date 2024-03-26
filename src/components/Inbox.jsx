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
                Göra något
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
                Göra något annat
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
                Göra något mer
              </label>
            </li>
          </ul>
          <div id="add-task-from-main">
            <i className="fas fa-solid fa-plus red"></i>
            <span>Lägg till uppgift</span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Inbox;
