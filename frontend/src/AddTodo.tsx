import {FormEvent, useState} from "react";
import {NewTodo} from "./Todo";
import {useNavigate} from "react-router-dom";

type AddTodoProps = {
    addTodo: (newTodo: NewTodo) => void
}


export default function AddTodo(props: AddTodoProps) {

    const [description, setDescription] = useState<string>('')

    const navigate = useNavigate()

    function onSaveTodo(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newTodo: NewTodo = {description: description, status: 'OPEN'}

        props.addTodo(newTodo)
    }

    return (
        <div>
            <form onSubmit={onSaveTodo}>
                <input value={description} onChange={(event) => {
                    setDescription(event.target.value)
                }}/>
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}
