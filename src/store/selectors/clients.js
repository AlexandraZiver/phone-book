import { createSelector } from "reselect";

import isURL from "../../utils/URL";
import { clientsApi } from "../api/clients";

const searchClients = (textSearch) => {
  return createSelector(clientsApi.endpoints.fetchAllClients.select(), (clients) =>
    clients.data?.filter((object) =>
      Object.values(object).some((value) =>
        Object.values(value)
          .filter((value) => isURL(value))
          .join("")
          .match(new RegExp(textSearch, "gi")),
      ),
    ),
  );
};

export default searchClients;
