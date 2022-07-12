import React, { useState } from "react";
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

const NewTodoForm = () => {
    const [inputProps, resetInput] = useInput("");

    return (
        <div className="new-todo-form ">
            <input className="new-todo-input" type="text" {...inputProps}/>
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
};

export default NewTodoForm;