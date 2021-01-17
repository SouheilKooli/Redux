const initialState = {
  tasksList: [
      {
          id: 1,
          description: "Task 1",
          isDone: false,
      },
      {
          id: 2,
          description: "Task 2",
          isDone: false,
      }, {
          id: 3,
          description: "Task 3",
          isDone: false,
      },
      {
          id: 4,
          description: "Task 4",
          isDone: false,
      },
  ],
};
function rootReducer(state = initialState, { type, payload }) {
              switch (type) {
                  case "ADD_TASK":
                      return {
                          ...state,
                          tasksList: [...state.tasksList, payload],
                      };
                  case "TOGGLE_TASK":
                      return {
                          ...state,
                          tasksList: state.tasksList.map((task) =>
                              task.id === payload ? { ...task, isDone: !task.isDone } : task
                          ),
                      };
                  case "DELETE_TASK":
                      return {
                          ...state,
                          tasksList: state.tasksList.filter((task) => task.id !== payload),
                      };
                  case "EDIT_TASK":
                      return {
                          ...state,
                          tasksList: state.tasksList.map((task) =>
                              task.description === payload.description
                                  ? { ...task, description: payload.newDescription }
                                  : task
                          ),
                      };
                  default:
                      return state;
              }
          }

          export default rootReducer;