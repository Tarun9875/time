import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "./todoSlice";

const TodoApp = () => {
  const [text, setText] = useState("");
  const todos = useSelector((s) => s.todos);
  const dispatch = useDispatch();

  const add = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter todo" />
      <button onClick={add}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ margin: "8px 0" }}>
            <span
              onClick={() => dispatch(toggleComplete(t.id))}
              style={{ textDecoration: t.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {t.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(t.id))} style={{ marginLeft: 8 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
