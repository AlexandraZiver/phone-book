import { configureStore } from "@reduxjs/toolkit";

import { clientsApi } from "./api/clients";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clientsApi.middleware),
});

export default store;
