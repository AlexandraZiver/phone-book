import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { Size } from "../../constants/size.js";
import { clientsApi } from "../../store/clients/clientsApi";
import LoadingAndError from "../LoadingAndError";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const { data: clients, status, error } = clientsApi.useFetchAllClientsQuery();

  return (
    <List className={styles.Container} selection verticalAlign="middle">
      <LoadingAndError status={status} error={error} size={Size.SMALL}>
        {clients?.map((client) => (
          <Link to={`/clients/${client.id}`} key={client.id}>
            <ClientListItem client={client} />
          </Link>
        ))}
      </LoadingAndError>
    </List>
  );
};

export default ClientList;
