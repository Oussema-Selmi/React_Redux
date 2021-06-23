import React,{useState} from 'react'
import {addTask} from '../JS/Action/Actions'
import { useDispatch } from 'react-redux'

const AddToDo = () => {
const[textInput,setTextInput]=useState('')
const dispatch = useDispatch();
const addElement = (e) => {
    if(textInput){
        dispatch(addTask({
            id:Math.random(),
            text: textInput,
            isDone:false,

        },));
       
        setTextInput("");
    } 
  
else{alert("Please give a text for the task");}
};

    return (
        <div>
            <input onChange={(e)=>setTextInput(e.target.value)} />
            <button onClick={addElement}>add task</button>
        </div>
    )
}

export default AddToDo 
