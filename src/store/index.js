import { configureStore } from "@reduxjs/toolkit";

import { clientsApi } from "./clients/clientsApi";
import rootReducer from "./reducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(clientsApi.middleware),
});

export default store;
