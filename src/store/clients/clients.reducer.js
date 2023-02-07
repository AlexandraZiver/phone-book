import { createSlice } from "@reduxjs/toolkit";

import { ClientService } from "../../api";

const Status = {
  INITIAL: null,
  LOADING: "loading",
  ERROR: "error",
};

const clientsReducer = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    currentClient: null,
    status: Status.INITIAL,
    error: Status.INITIAL,
    statusClientId: Status.INITIAL,
  },
  reducers: {},
  extraReducers: {
    [ClientService.getClients.pending]: (state) => {
      state.status = Status.LOADING;
      state.error = Status.INITIAL;
    },
    [ClientService.getClients.fulfilled]: (state, action) => {
      state.status = Status.INITIAL;
      state.error = Status.INITIAL;
      state.clients = action.payload;
    },
    [ClientService.getClients.rejected]: (state, action) => {
      state.status = Status.ERROR;

      state.error = action.payload;
    },
    [ClientService.getClientById.pending]: (state) => {
      state.statusClientId = Status.LOADING;
      state.error = Status.INITIAL;
    },
    [ClientService.getClientById.fulfilled]: (state, action) => {
      state.statusClientId = Status.INITIAL;
      state.error = Status.INITIAL;
      state.currentClient = action.payload;
    },
    [ClientService.getClientById.rejected]: (state, action) => {
      state.statusClientId = Status.ERROR;
      state.error = action.payload;
    },
  },
});

export default clientsReducer.reducer;
