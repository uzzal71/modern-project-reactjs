import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import TodoList from "./todos/TodoList";

const todos = [
    {id: 1, title: "first", date: "2022-05-05"}
];

const App = () => {
    return (
        <div className="App">
            <TodoList todos={todos}/>
        </div>
    );
};

export default hot(module)(App);