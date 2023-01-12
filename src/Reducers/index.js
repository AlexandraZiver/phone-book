import { combineReducers } from "redux";

import clientsReducer from "./toolkitSlice";

const rootReducer = combineReducers({ clients: clientsReducer });

export default rootReducer;
