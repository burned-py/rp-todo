import './TodoCard.css'
import {Todo} from "./Todo";
import {Button} from '@mui/material';
import {useNavigate} from "react-router-dom";

type Props = {
    todo: Todo,
    updateTodo: (todo: Todo) => void,
    deleteTodo: (id: string) => void
}

export default function TodoCard(props: Props) {

    const navigate = useNavigate()

    const nextStatus: { OPEN: "IN_PROGRESS", IN_PROGRESS: "DONE", DONE: "DONE" } = {
        "OPEN": "IN_PROGRESS",
        "IN_PROGRESS": "DONE",
        "DONE": "DONE",
    }



    function onAdvanceClick() {
        //Wir erstellen eine Kopie des Todos mit den geupdateten Werten
        //                         {} wir erstellen ein neues Object
        //                          ... (spreading) übernehmen wir alle eigenschaften des alten todos
        //                                       , wir fügen disese Eigenschaft neu hinzu oder ersetzten den wer der eigenschaft
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
            <Button onClick={() => {
                navigate('/todos/' + props.todo.id)
            }}>Details</Button>
            {props.todo.status !== 'DONE' && <button onClick={onAdvanceClick}>Advance</button>}
            {props.todo.status === 'DONE' && <button onClick={onDeleteClick}>Delete</button>}

        </div>
    )
}
