import { createSlice } from "@reduxjs/toolkit";

import { ClientService } from "../../api";

const clientsReducer = createSlice({
  name: "clients",
  initialState: {
    clients: [],
    currentClient: null,
    status: null,
    error: null,
    statusClientId: null,
  },
  reducers: {},
  extraReducers: {
    [ClientService.getClients.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [ClientService.getClients.fulfilled]: (state, action) => {
      state.status = null;
      state.error = null;
      state.clients = action.payload;
    },
    [ClientService.getClients.rejected]: (state, action) => {
      state.status = "error";

      state.error = action.payload;
    },
    [ClientService.getClientById.pending]: (state) => {
      state.statusClientId = "loading";
      state.error = null;
    },
    [ClientService.getClientById.fulfilled]: (state, action) => {
      state.statusClientId = "resolve";
      state.error = null;
      state.currentClient = action.payload;
    },
    [ClientService.getClientById.rejected]: (state, action) => {
      state.statusClientId = "error";
      state.error = action.payload;
    },
  },
});

export default clientsReducer.reducer;
