import { createSlice } from "@reduxjs/toolkit";

const clientReducer = createSlice({
  name: "toolkit",
  initialState: {
    clients: [],
  },
  reducers: {
    getClientsAction(state, action) {
      state.clients = action.payload;
    },
  },
});
export default clientReducer.reducer;
export const { getClientsAction } = clientReducer.actions;
