import React from 'react'
import '../TodoList.css'

interface TodoListProps{
    items : {
        id:number,
        name:string
    }[];
    onDeleteTodoTask:(taskid:number)=>void;
}
const TodoList :React.FC <TodoListProps> = props=>{
    return (<div>
        <ul>
            {props.items.map(todo=><li key = {todo.id}><span><i>{todo.name}</i> </span><button onClick = {props.onDeleteTodoTask.bind(null,todo.id)} className='btn btn-primary'>Delete</button></li>)}
        </ul>
    </div>);
}

export default TodoList
