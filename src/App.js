import React,{useState} from 'react'
import TaskList from './Components/TaskList'
import AddToDo from './Components/AddToDo'
import Filter from './Components/Filter'



function App() {

  const [filterDone,setFilterDone]=useState(false)
  const [filterUnDone,setFilterUnDone]=useState(false)

  const HandleDone=()=>{setFilterDone(!filterDone)}
  const HandleUnDone=()=>{setFilterUnDone(!filterUnDone)}

  return (
    <div className="App">
      <Filter HandleDone={HandleDone} HandleUnDone={HandleUnDone} />
      <AddToDo  />
      <TaskList filterDone={filterDone} filterUnDone={filterUnDone}/>
    </div>
  );
}

export default App;
