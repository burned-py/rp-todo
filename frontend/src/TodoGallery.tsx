import {Todo} from "./Todo";
import TodoCard from "./TodoCard";

type Props = {
    todos: Todo[]
}

export default function TodoGallery(props: Props) {

    return (
        <div>
            {
                props.todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
            }
        </div>
    )
}
