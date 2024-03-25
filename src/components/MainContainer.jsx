function MainContainer() {
  return (
    <div id="container">
      <aside>
        <div>
          <i className="fa-solid fa-user fa-lg" id="user-icon"></i>
          Användare
        </div>
        <div>
          <i className="fa-solid fa-circle-plus fa-lg" id="add-task-icon"></i>
          Lägg till uppgift
        </div>
        <div>
          <i className="fa-solid fa-inbox fa-lg" id="inbox-icon"></i>
          Inkorg
        </div>
      </aside>
      <main>main</main>
    </div>
  );
}

export default MainContainer;
