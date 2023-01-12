import { createReducer } from "@reduxjs/toolkit";

import { getClientsAction } from "../Actions/clients";

const defaultState = {
  clients: [],
};
const clientsReducer = createReducer(defaultState, {
  [getClientsAction]: function (state, actions) {
    state.clients = actions.payload;
  },
});

export default clientsReducer;
