import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
    return (
       <div className="todo-list">
            { todos.map(todo => <TodoListItem todo={todo} />)}
       </div>
    );
};

export default TodoList;