import './TodoCard.css'
import {Todo} from "./Todo";

type Props = {
    todo: Todo
}

export default function TodoCard(props: Props) {

    return (
        <div className='todo-card'>
            <p>{props.todo.description}</p>
            <p>{props.todo.status}</p>
            <p>{props.todo.id}</p>
        </div>
    )
}
