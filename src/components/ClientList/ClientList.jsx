import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { List } from "semantic-ui-react";

import clientData from "../../data/clients.json";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setClients(clientData);
  }, []);

  return (
    <List className={styles.Сontainer} selection verticalAlign="middle">
      {clients.map((client, index) => (
        <Link to={`/clients/${index}`} key={client.contact.phone}>
          <ClientListItem client={client} isSelected={index == id} />
        </Link>
      ))}
    </List>
  );
};

export default ClientList;
