import React, { useState, useEffect } from "react";
import { List } from "semantic-ui-react";

import clientData from "../../data/clients.json";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem.jsx";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    setClients(clientData);
  }, []);

  return (
    <List className={styles.Сontainer} selection verticalAlign="middle">
      {clients.map((client) => (
        <ClientListItem key={client.contact.phone} client={client} />
      ))}
    </List>
  );
};

export default ClientList;
