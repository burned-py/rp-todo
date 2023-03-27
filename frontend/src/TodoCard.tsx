import './TodoCard.css'
import {Todo} from "./Todo";

type Props = {
    todo: Todo,
    updateTodo: (todo: Todo) => void
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

    return (
        <div className='todo-card'>
            <p>{props.todo.description}</p>
            <p>{props.todo.status}</p>
            <p>{props.todo.id}</p>
            {props.todo.status !== 'DONE' && <button onClick={onAdvanceClick}>Advance</button>}
        </div>
    )
}
