import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

const TaskList = ({filterDone,filterUnDone}) => {

    const taskList = useSelector((state) => state.taskList);

    return (
        <div>
        

         {(filterDone?(filterUnDone?taskList:(taskList.filter(el=>el.isDone===true))):(filterUnDone?taskList.filter(el=>(el.isDone===false)):taskList)).map((task,index) => {
    return (<Task task={task} key={task.id}/>)
    
           })}
  
    </div>
)
}

export default TaskList
