import { combineReducers } from "redux";

import { clientsApi } from "../api/clients";

const rootReducer = combineReducers({
  [clientsApi.reducerPath ?? "unknown"]: clientsApi.reducer,
});

export default rootReducer;
