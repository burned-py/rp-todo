import {Link, NavLink} from "react-router-dom";


export default function Header() {

    return (
        <div>
            <h1>Todo Board</h1>
            <p><Link to={'/todos'}>Todos</Link></p>
            <p><NavLink to={'/todos/add'}>Add Todo</NavLink></p>
        </div>
    )
}
