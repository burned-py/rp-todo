import React from 'react';
import './App.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import AddTodo from "./AddTodo";
import useTodos from "./useTodos";

function App() {

    const {todos, addTodo, deleteTodo, updateTodo} = useTodos()

    return (
        <div className="App">
            <Header/>
            <TodoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            <AddTodo addTodo={addTodo}/>
        </div>
    );
}

export default App;
