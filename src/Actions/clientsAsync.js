import { getClientsAction } from "../Reducers/toolkitSlice";

const fetchClients = () => {
  return function (dispatch) {
    fetch("http://localhost:8000/clients")
      .then((response) => response.json())
      .then((json) => dispatch(getClientsAction(json)));
  };
};
export { fetchClients };
