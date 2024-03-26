function Inbox() {
  return (
    <main>
      <h1>Inkorg</h1>
      <div id="tasks-list">
        <p>
          <ul>
            <li>
              <input id="radio-1" type="checkbox" />{" "}
              <label htmlFor="radio-1">Göra något</label>
            </li>
            <li>
              <input id="radio-2" type="checkbox" />{" "}
              <label htmlFor="radio-2">Göra något annat</label>
            </li>
            <li>
              <input id="radio-3" type="checkbox" />{" "}
              <label htmlFor="radio-3">Göra något mer</label>
            </li>
          </ul>
          <div id="add-task-from-main">
            <i className="fas fa-solid fa-plus red"></i>
            <span>Lägg till uppgift</span>
          </div>
        </p>
      </div>
    </main>
  );
}
export default Inbox;
