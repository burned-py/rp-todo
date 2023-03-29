import React from 'react';
import './App.css';
import Header from "./Header";
import TodoGallery from "./TodoGallery";
import AddTodo from "./AddTodo";
import useTodos from "./useTodos";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetail from "./TodoDetail";



function App() {

    const {todos, addTodo, deleteTodo, updateTodo} = useTodos()
    const notify = () => toast("Irgendwas falsch");


    return (
        <BrowserRouter>
            <div className="App">
                <ToastContainer autoClose={4000}/>
                <Header/>

                <Routes>
                    <Route path={'/todos'} element={<TodoGallery todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>}/>
                    <Route path={'todos/add'} element={<AddTodo addTodo={addTodo}/>}/>
                    <Route path={'todos/:id'} element={<TodoDetail />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
