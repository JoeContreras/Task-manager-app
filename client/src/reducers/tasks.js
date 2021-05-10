import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return tasks.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...tasks, action.payload];
    case UPDATE:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};
export default taskReducer;
