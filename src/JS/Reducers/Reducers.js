import {
    ADD_TASK,
    COMPLETE_TASK,
    DELETE_TASK,
    EDIT_TASK,
  } from "../Action/ActionTypes";
  
  const initialState = {
    taskList: [
      {
        text: "My First Todo",
        id: 0,
        isDone: false,
      },
      {
        text: "My Second Todo",
        id: 1,
        isDone: false,
      },
      {
        text: "My Third Todo",
        id: 2,
        isDone: false,
      },
    ],
  };
  
  const Reducers = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TASK:
        return {
          ...state,
          taskList: [...state.taskList, payload],
        };
  
      case EDIT_TASK:
        return {
          ...state,
          taskList: state.taskList.map((task) => {
  
            if (task.id === payload.id) {
              return { ...task, text: payload.text };
            } else {
              return task;
            }
          }),
        };
  
      case COMPLETE_TASK:
        return {
          ...state,
  
          taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
          ),
        };
  
      case DELETE_TASK:
        return {
          ...state,
          taskList: state.taskList.filter((task) => task.id !== payload),
        };
      default:
        return state;
    }
  };
  
  export default Reducers;
  