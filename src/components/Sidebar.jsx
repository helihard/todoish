function Sidebar() {
  return (
    <aside>
      <div>
        <i className="fa-solid fa-user fa-lg" id="user-icon"></i>
        <span>Användare</span>
      </div>
      <div>
        <i className="fa-solid fa-circle-plus fa-lg" id="add-task-icon"></i>
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
