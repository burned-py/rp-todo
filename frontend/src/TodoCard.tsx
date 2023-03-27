import './TodoCard.css'
import {Todo} from "./Todo";

type Props = {
    todo: Todo,
    updateTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function TodoCard(props: Props) {

    const nextStatus: {OPEN: "IN_PROGRESS", IN_PROGRESS: "DONE", DONE: "DONE"} = {
        "OPEN": "IN_PROGRESS",
        "IN_PROGRESS": "DONE",
        "DONE": "DONE",
    }

    function onAdvanceClick() {
        const todoToUpdate: Todo = {...props.todo, status: nextStatus[props.todo.status]}

        props.updateTodo(todoToUpdate)
    }

    function onDeleteClick() {
        props.deleteTodo(props.todo.id)
    }

    return (
        <div className='todo-card'>
            <p>{props.todo.description}</p>
            <p>{props.todo.status}</p>
            <p>{props.todo.id}</p>
            {props.todo.status !== 'DONE' && <button onClick={onAdvanceClick}>Advance</button>}
            {props.todo.status === 'DONE' && <button onClick={onDeleteClick}>Delete</button>}

        </div>
    )
}
