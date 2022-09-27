import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import clientData from "../../data/clients.json";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(clientData);
  }, []);

  return (
    <List className={styles.Сontainer} selection verticalAlign="middle">
      {clients.map((client, index) => (
        <Link to={`/clients/${index}`} key={client.contact.phone}>
          <ClientListItem client={client} />
        </Link>
      ))}
    </List>
  );
};

export default ClientList;
