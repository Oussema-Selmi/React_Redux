import React from 'react'
import { useDispatch } from 'react-redux'
import Edit from "./Edit"
import { doneTask,deleteTask } from '../JS/Action/Actions'


export const Task = ({task}) => {
    const dispatch = useDispatch()
    const switchDone = ( )=>{
        dispatch(doneTask(task.id))
    
    }
    const DeleteTask = ( )=>{
        dispatch(deleteTask(task.id))
    
    }

    return (
        <div>
            {task.text}  <button onClick={switchDone}> {task.isDone?"☒":"☐"} </button>
            <button onClick={DeleteTask}> ❌ </button>
            <Edit task={task} />

        </div>
    )
}



export default Task
