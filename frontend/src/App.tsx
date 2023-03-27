import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import {Todo} from "./Todo";
import axios from "axios";

function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadAllTodos()
    }, [])

    function loadAllTodos() {
        axios.get("/api/todo")
            .then((response) => {setTodos(response.data)})
            .catch((error) => {console.error(error)})
    }


    return (
        <div className="App">
            <Header/>
            <TodoGallery todos={todos}/>
        </div>
    );
}

export default App;
