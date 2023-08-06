import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import './Todo.js'
import Todo from './Todo.js';

function App() {
  const [taskName, setTaskName] = useState({
    task :'',
    id : ''
  })

  const [taskList, setTaskList] = useState([])
  const [isEdit , setISEdit] = useState(true)

  const onClickAddTask =()=>{
    let taskDetails = null
    if(taskName.id ==='' && taskName.task !== ''){
      taskDetails  ={
        id: uuidv4(),
        task: taskName.task
      }
      setTaskList([...taskList,taskDetails])
    }else{
      taskDetails = taskName 
      const editedTaskDetails = taskList.map(eachTask=>{
        if(eachTask.id === taskName.id){
          return taskDetails
        }
        return eachTask
      })
      setTaskList(editedTaskDetails)
      setISEdit(true)
    }
    

    
    setTaskName({
      task :'',
      id : ''
    })
  }

  const onDeleteBtn = (id)=>{
    const filteredTask = taskList.filter(eachTask=> eachTask.id !== id) 
    setTaskList(filteredTask)
  }

  const onEditBtn = (id) =>{
    const editNameValue = taskList.filter(eachTask => eachTask.id === id)
    console.log(editNameValue[0])
    setTaskName(editNameValue[0])
    setISEdit(false)
  }

  const BtnName = isEdit?'Add Task':'Update Task'
  return (
 <div  className='todo-container'>
    <div className='input-card'>
      <input  onChange={(e)=> setTaskName({...taskName,task:e.target.value})} className='input-task' type='text' placeholder='Enter Task' value={taskName.task} /> 
      <button onClick={onClickAddTask}  className='add-task-btn' type='button'>{BtnName}</button>
    </div>
    {taskList.map(eachTask =>(
           <Todo key={eachTask.id} eachTask={eachTask} onDeleteBtn={onDeleteBtn} onEditBtn={onEditBtn} /> 
            ))}
 </div>
  )
}
export default App;