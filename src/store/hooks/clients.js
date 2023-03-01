import { useSelector } from "react-redux";

import { clientsApi } from "../api/clients";
import searchClients from "../selectors/clients";

const useClients = (textSearch) => {
  const { data: clients, status, error } = clientsApi.useFetchAllClientsQuery();
  const clientsFound = useSelector(searchClients(textSearch));
  return { clients: clientsFound || clients, status, error };
};

export default useClients;
