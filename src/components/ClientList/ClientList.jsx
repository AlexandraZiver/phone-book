import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { sendRequest } from "../../api/APIUtils";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  let url = "http://localhost:8000/clients";

  useEffect(() => {
    sendRequest(url, setClients);
  }, [url]);

  return (
    <List className={styles.Сontainer} selection verticalAlign="middle">
      {clients.map((client) => (
        <Link to={`/clients/${client.id}`} key={client.contact.phone}>
          <ClientListItem client={client} id={client.id} />
        </Link>
      ))}
    </List>
  );
};
export default ClientList;
