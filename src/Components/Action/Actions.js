let nextTaskId = 0;

export const addTask = (text) => ({
  type: "ADD_TASK",
  id: nextTaskId++,
  text,
});

export const todolistFilter = (filter) => ({
  type: "SET_TODOLIST_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
export const setTodoListFilter = (filter) => ({
  type: "SET_TODOLIST_FILTER",
  filter,
});
export const todolistFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const updateTodo = (totask) => {
  return {
    type: "UPDATE_TODO",
    payload: totask,
  };
};