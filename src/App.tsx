import React ,{useState} from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import Todo from './Todo.model'

const App :React.FC = ()=>{
  
  const todoAddHandler = (task:string)=>{
    console.log('In todo Add Handler'+task);
    setTodos(prevTodos =>[...prevTodos ,{id:Math.random(),name:task}]);
  }

const todoDeleteHandler = (taskid:number)=>{
  console.log(' Task Id :'+taskid);
  setTodos(prevTodos =>{
    return prevTodos.filter(todo=>todo.id!==taskid);
  })
}


  const [todos,setTodos] = useState<Todo[]>([])

  return (
    <div className='container'>
      TODOS App : 28-11-2020 by LSK
      <hr/>
      <NewTodo onAddTodoTask ={todoAddHandler} />
      <TodoList items={todos} onDeleteTodoTask = {todoDeleteHandler}/>
      
    </div>
  );
}
export default App;
