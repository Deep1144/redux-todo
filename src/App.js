import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import TodoListFunc from "./components/TodoListFunc";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Todo/>
                <TodoList/>
                <TodoListFunc/>
            </header>
        </div>
    );
}


export default App;
