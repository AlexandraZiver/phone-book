import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import ClientService from "../../services/client";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);

  useEffect(() => {
    dispatch(ClientService.getClients());
  }, []);

  return (
    <List className={styles.Container} selection verticalAlign="middle">
      {clients.map((client) => (
        <Link to={`/clients/${client.id}`} key={client.id}>
          <ClientListItem client={client} />
        </Link>
      ))}
    </List>
  );
};

export default ClientList;
