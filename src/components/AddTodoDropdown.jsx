import { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext.jsx";
import AddTodoForm from "./AddTodoForm.jsx";

function AddTodoDropdown() {
  const { addTodo, dropdownShow, toggleDropdownDiv } = useContext(TodoContext);

  return (
    <>
      <div
        className="add-todo-from-main"
        id={dropdownShow ? "" : "hover-effect"}
        style={{ width: "max-content" }}
      >
        <p id="circle">
          {dropdownShow ? (
            <i
              className="fa-solid fa-circle-xmark"
              id="x-icon"
              onClick={toggleDropdownDiv}
            ></i>
          ) : (
            <i
              className="fas fa-solid fa-plus"
              id="plus-sign-icon"
              onClick={toggleDropdownDiv}
            ></i>
          )}
        </p>
        {dropdownShow ? (
          <span></span>
        ) : (
          <span onClick={toggleDropdownDiv} style={{ cursor: "pointer" }}>
            Lägg till uppgift
          </span>
        )}
      </div>
      {dropdownShow && <AddTodoForm onSubmit={addTodo} />}
    </>
  );
}

export default AddTodoDropdown;
