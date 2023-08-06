

const Todo = (props) =>{
     const {eachTask, onDeleteBtn,onEditBtn} = props

    return(
        <div className='task-card'>
            <p>{eachTask.task}</p>
            <button onClick={()=>onDeleteBtn(eachTask.id)}>Delete</button>
            <button onClick={()=>onEditBtn(eachTask.id)}>Edit</button>
        </div>
    )
}

export default Todo;