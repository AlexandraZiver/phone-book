import { createAction } from "@reduxjs/toolkit";

import { GET_CLIENTS } from "../constants/actionsTypes";

const getClientsAction = createAction(GET_CLIENTS);
export default getClientsAction;
