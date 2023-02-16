import { combineReducers } from "redux";

import { clientsApi } from "../clients/clientsApi";

const rootReducer = combineReducers({
  [clientsApi.reducerPath]: clientsApi.reducer,
});

export default rootReducer;
