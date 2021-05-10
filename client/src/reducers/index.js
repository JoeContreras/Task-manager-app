import { combineReducers } from "redux";

import auth from "./auth";
import taskReducer from "./tasks";

export const reducers = combineReducers({ auth, tasks: taskReducer });
