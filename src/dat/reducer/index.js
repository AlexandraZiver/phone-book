import { combineReducers } from "redux";

import clientsReducer from "../clients";

const rootReducer = combineReducers({ clients: clientsReducer });

export default rootReducer;
