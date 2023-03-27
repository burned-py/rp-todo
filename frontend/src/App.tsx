import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import {NewTodo, Todo} from "./Todo";
import axios from "axios";
import AddTodo from "./AddTodo";

function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadAllTodos()
    }, [])

    function loadAllTodos() {
        axios.get("/api/todo")
            .then((getAllTodosResponse) => {setTodos(getAllTodosResponse.data)})
            .catch((error) => {console.error(error)})
    }

    function addTodo(newTodo: NewTodo) {
        axios.post("/api/todo", newTodo)
            .then((addTodoResponse) => {
                setTodos([...todos, addTodoResponse.data])
            })
            .catch(console.error)
    }

    function updateTodo(todo: Todo) {
        axios.put(`/api/todo/${todo.id}`, todo)
            .then((putTodoResponse) => {
                setTodos(todos.map(currentTodo => {
                    if (currentTodo.id === todo.id) {
                        return putTodoResponse.data
                    }
                    else {
                        return currentTodo
                    }
                }))
            })
            .catch(console.error)
    }

    return (
        <div className="App">
            <Header/>
            <TodoGallery todos={todos} updateTodo={updateTodo}/>
            <AddTodo addTodo={addTodo}/>
        </div>
    );
}

export default App;
