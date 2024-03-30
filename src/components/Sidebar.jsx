import { useContext } from "react";
import { TodoContext } from "../../TodoContext.jsx";
import Modal from "react-modal";
import AddTodoModal from "./AddTodoModal.jsx";

function Sidebar() {
  const { modalOpen, openModal, closeModal, addTodo } = useContext(TodoContext);

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
      <div onClick={openModal}>
        <i className="fa-solid fa-circle-plus fa-lg" id="add-todo-icon"></i>
        <span>Lägg till uppgift</span>
      </div>
      <Modal isOpen={modalOpen} onRequestClose={closeModal} className="modal">
        <AddTodoModal onSubmit={addTodo} />
      </Modal>
      <div>
        <i className="fa-solid fa-inbox fa-lg" id="inbox-icon"></i>
        <span>Inkorg</span>
      </div>
    </aside>
  );
}

export default Sidebar;
