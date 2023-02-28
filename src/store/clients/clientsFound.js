import { createSelector } from "reselect";

import getBoolForUrl from "../../services/createBool";
import { clientsApi } from "../../store/clients/clientsApi";

const searchClients = (input) => {
  return createSelector(clientsApi.endpoints.fetchAllClients.select(), (clients) =>
    clients.data?.filter((object) =>
      Object.values(object).some((value) =>
        Object.values(value)
          .filter((value) => getBoolForUrl(value))
          .join("")
          .match(new RegExp(`${input}`, "gi")),
      ),
    ),
  );
};

export default searchClients;
