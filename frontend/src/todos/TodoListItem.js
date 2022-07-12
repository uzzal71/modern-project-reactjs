import React from "react";

const TodoListItem = ({ todo }) => {
    return (
       <div className="todo-list">
            <h1 key={todo.id}>{todo.title}</h1>
       </div>
    );
};

export default TodoListItem;