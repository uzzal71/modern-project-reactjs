import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange: (e) => setValue(e.target.value)
        },
        () => setValue(initialValue)
    ];
};

const NewTodoForm = ({ todos, onCreatePresed }) => {
    const [inputProps, resetInput] = useInput("");

    return (
        <div className="new-todo-form ">
            <input className="new-todo-input" type="text" {...inputProps} placeholder="Type your new todo here"/>
            <button 
            onClick={() => {
                const isDuplicated = todos.some(todo => todo.text === inputProps.value);
                if (!isDuplicated) {
                    onCreatePresed(inputProps.value);
                    resetInput("");
                }
            }}
            className="new-todo-button"
            >Create Todo</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onCreatePresed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);