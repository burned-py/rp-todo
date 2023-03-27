import {Todo} from "./Todo";

type Props = {
    todos: Todo[]
}

export default function TodoGallery(props: Props) {

    return (
        <div>
            {props.todos.map((todo) => <div key={todo.id}>
                <p>{todo.id}</p>
            </div>)}
        </div>
    )
}
