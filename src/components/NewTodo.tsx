import React ,{useRef} from 'react'
import '../NewTodo.css'
type NewTodoProps = {
    onAddTodoTask:(todoText:string)=>void
};

const NewTodo :React.FC<NewTodoProps> = (props)=>{

  
    const taskNameRef = useRef<HTMLInputElement>(null);

    const addTaskHandler = (event:React.FormEvent)=> {
        event.preventDefault();
        console.log('Exe.. Add Task Handler.. Reading the Task Name from Ref..'+taskNameRef.current!.value)
        const task_name = taskNameRef.current!.value;
        props.onAddTodoTask(task_name);

    }

    
    return (<div>
        <form onSubmit={addTaskHandler}>
        <div className="form-group">
            <label htmlFor="name">Task </label>
            <input ref= {taskNameRef} className = 'form-control' type='text' id='name' placeholder='Enter Task'/>
        </div>
        
        <div className="form-group">
            <button  type= 'submit' className='btn btn-primary'>Add Task</button>
        </div>
        </form>
    </div>)
}

export default NewTodo;