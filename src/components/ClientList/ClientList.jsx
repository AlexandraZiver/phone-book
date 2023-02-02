import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import ClientService from "../../store/clients/clients.actions";
import LoadingAndError from "../LoadingAndError";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ClientService.getClients());
  }, []);

  const { clients, error, status } = useSelector((state) => state.clients);

  return (
    <List className={styles.Container} selection verticalAlign="middle">
      <LoadingAndError status={status} error={error} dependence={false}>
        {clients.map((client) => (
          <Link to={`/clients/${client.id}`} key={client.id}>
            <ClientListItem client={client} />
          </Link>
        ))}
      </LoadingAndError>
    </List>
  );
};

export default ClientList;
