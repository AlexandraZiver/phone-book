import { createSlice } from "@reduxjs/toolkit";

import { ClientService } from "../../services";

const clientReducer = createSlice({
  name: "toolkit",
  initialState: {
    clients: [],
    status: null,
    error: null,
  },
  reducers: {
    getClientsAction(state, action) {
      state.clients = action.payload;
    },
  },
  extraReducers: {
    [ClientService.getClients.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [ClientService.getClients.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.clients = action.payload;
    },
    [ClientService.getClients.rejected]: (state) => {
      state.error = "Error";
    },
  },
});

export default clientReducer.reducer;
export const { getClientsAction } = clientReducer.actions;
