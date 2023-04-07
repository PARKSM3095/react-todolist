import React from "react";

function TodoTemplate({ children }) {
  return (
    <>
      <div className="todo-box">{children}</div>
    </>
  );
}
export default TodoTemplate;
