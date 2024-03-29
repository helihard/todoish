function Sidebar() {
  return (
    <aside>
      <div className="logo-div">
        <span className="fa-stack fa-2x">
          <i className="fa-solid fa-square fa-stack-2x"></i>
          <i className="fa-solid fa-check-double fa-stack-1x fa-inverse"></i>
        </span>
        <span>Todoish</span>
      </div>
      <div>
        <i className="fa-solid fa-user fa-lg" id="user-icon"></i>
        <span>
          <strong>Användare</strong>
        </span>
      </div>
      <div>
        <i className="fa-solid fa-circle-plus fa-lg" id="add-todo-icon"></i>
        <span>Lägg till uppgift</span>
      </div>
      <div>
        <i className="fa-solid fa-inbox fa-lg" id="inbox-icon"></i>
        <span>Inkorg</span>
      </div>
    </aside>
  );
}

export default Sidebar;
