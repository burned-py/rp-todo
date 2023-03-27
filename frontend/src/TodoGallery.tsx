import './TodoGallery.css'
import {Todo} from "./Todo";
import TodoCard from "./TodoCard";

type Props = {
    todos: Todo[]
}

export default function TodoGallery(props: Props) {

    const openTodos: Todo[] = props.todos.filter((todo) => todo.status === 'OPEN')
    const inProgressTodos: Todo[] = props.todos.filter((todo) => todo.status === 'IN_PROGRESS')
    const doneTodos: Todo[] = props.todos.filter((todo) => todo.status === 'DONE')


    return (
        <div className='todo-gallery'>
            <div className='todo-gallery_column'>
                {
                    openTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
                }
            </div>
            <div className='todo-gallery_column'>
                {
                    inProgressTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
                }
            </div>
            <div className='todo-gallery_column'>
                {
                    doneTodos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
                }
            </div>
        </div>
    )
}
