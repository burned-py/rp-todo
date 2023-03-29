import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Todo} from "./Todo";
import {toast} from "react-toastify";
import {Typography} from "@mui/material";

export default function TodoDetail() {

    const {id} = useParams()

    //const {id} = useParams<{ id: string }>()

    const [todo, setTodo] = useState<Todo>()

    useEffect(() => {
        if (id) {
            loadTodoById(id)
        }

    }, [])


    function loadTodoById(id: String) {
        axios.get("/api/todo/" + id)
            .then((response) => {
                setTodo(response.data)
            })
            .catch((error) => {
                toast.error("Toast: Axios request failed")
            })
    }


    return (
        <div> {
            todo ? //conditional Rendering
            <div>
                <Typography>{todo.id}</Typography>
                <Typography>{todo.description}</Typography>
                <Typography>{todo.status}</Typography>
            </div>
            : <div> No Todo found </div>
        }
        </div>

    )
}