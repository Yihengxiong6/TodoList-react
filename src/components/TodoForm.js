import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : ""); // if there is edit, use the edit value as input default value

  const inputRef = useRef(null);
  useEffect(() => {
    // used to focus on input
    inputRef.current.focus();
  });
  const handelSubmit = (e) => {
    // once the user hit the submit button, it will call the the props.onSubmit to change the todo list state in the parent"todoList" component
    e.preventDefault();
    onSubmit({
      // this onSubmit function is a props passed by TodoList and it is same with the addTodoF funcion in the todolist
      id: Math.floor(Math.random() * 10000), // create a todo list's id and its random id
      text: input,
    });
    setInput("");
  };
  const handelChange = (e) => {
    setInput(e.target.value);
  };
  return edit ? (
    <>
      <form className="todo-form" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Update todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handelChange}
          ref={inputRef}
        />
        <button className="todo-button edit"> Update todo</button>
      </form>
    </>
  ) : (
    <>
      <form className="todo-form" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handelChange}
          ref={inputRef}
        />
        <button className="todo-button"> Add todo</button>
      </form>
    </>
  );
}

export default TodoForm;
