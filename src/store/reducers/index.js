import { combineReducers } from "redux";

import { clientsApi } from "../api/clients";

const rootReducer = combineReducers({
  [clientsApi.reducerPath]: clientsApi.reducer,
});

export default rootReducer;
