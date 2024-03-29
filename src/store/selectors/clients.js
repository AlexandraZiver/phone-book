import { createSelector } from "@reduxjs/toolkit";

import { isURL } from "../../utils/URL";
import { clientsApi } from "../api/clients";

const searchClients = createSelector(
  clientsApi.endpoints.fetchAllClients.select(),
  (state, textSearch) => textSearch,
  (state, textSearch) =>
    state.data?.filter((client) =>
      Object.values(client).some((clientInfo) =>
        Object.values(clientInfo)
          .filter((clientInfoValue) => !isURL(clientInfoValue)) //to avoid the reference in the value
          .join("")
          .match(new RegExp(textSearch, "gi")),
      ),
    ),
);

export default searchClients;
