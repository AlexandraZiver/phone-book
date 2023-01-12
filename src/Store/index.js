import { configureStore } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

import rootReducer from "../Reducers";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
  reducer: rootReducer,
});
export default store;
