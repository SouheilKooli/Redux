import { combineReducers } from "redux";
import { todolistFilters, updateTodo } from "../Action/Actions";

// const initState = {
//     totask: [],
//     text:'',
//     input:''
// };

const totasks = (state = [], action) => {
  let newTasks;
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO": 
      return state.map((totask) =>
        totask.id === action.id
          ? { ...totask, completed: !totask.completed }
          : totask
      );
    case "UPDATE_TODO":
      newTasks = [...state];
      let index = -1;
      for (let i = 0; i < newTasks.length; i++) {
        index++;
        if (newTasks[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTasks[index] = action.payload;
        return newTasks;
      }
      break;

    default:
      return state;
  }
};

const todolistFilter = (state = todolistFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_TODOLIST_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  totasks,
  todolistFilter,
});