import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { getAll } from "../../services";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    (async () => {
      const clients = await getAll();
      setClients(clients);
    })();
  }, []);

  return (
    <List className={styles.Сontainer} selection verticalAlign="middle">
      {clients?.map((client) => (
        <Link to={`/clients/${client.id}`} key={client.id}>
          <ClientListItem client={client} />
        </Link>
      ))}
    </List>
  );
};
export default ClientList;
