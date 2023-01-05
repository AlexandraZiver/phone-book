import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { ClientService } from "../../services";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    (async () => {
      const clients = await ClientService.getAll();
      setClients(clients);
    })();
  }, []);

  return (
    <List className={styles.Container} selection verticalAlign="middle">
      {clients?.map((client) => (
        <Link to={`/clients/${client.id}`} key={client.id}>
          <ClientListItem client={client} />
        </Link>
      ))}
    </List>
  );
};
export default ClientList;
