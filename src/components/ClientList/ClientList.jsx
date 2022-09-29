import React, { useState, useEffect } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useParams } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 3233376 (feature/clients-details)
=======
import { Link, useParams } from "react-router-dom";
>>>>>>> 8700e74 (fix/clients-details)
import { List } from "semantic-ui-react";

import clientData from "../../data/clients.json";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const { id } = useParams();
<<<<<<< HEAD

=======
>>>>>>> 8700e74 (fix/clients-details)
  useEffect(() => {
    setClients(clientData);
  }, []);

  return (
    <List className={styles.Сontainer} selection verticalAlign="middle">
      {clients.map((client, index) => (
        <Link to={`/clients/${index}`} key={client.contact.phone}>
<<<<<<< HEAD
<<<<<<< HEAD
          <ClientListItem client={client} isSelected={index === id} />
=======
          <ClientListItem client={client} />
>>>>>>> 3233376 (feature/clients-details)
=======
          <ClientListItem client={client} isSelected={index == id} />
>>>>>>> 8700e74 (fix/clients-details)
        </Link>
      ))}
    </List>
  );
};

export default ClientList;
