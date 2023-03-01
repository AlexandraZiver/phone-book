import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { Size } from "../../constants/size.js";
import useClients from "../../store/hooks/clients.js";
import LoadingAndError from "../LoadingAndError";
import Search from "../Search/Search.jsx";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [searchInput, setSearchInput] = useState("");
  const { clients: clientsFound, status, error } = useClients(searchInput);

  return (
    <List className={styles.Container} selection verticalAlign="middle">
      <LoadingAndError status={status} error={error} size={Size.SMALL}>
        <Search value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        {clientsFound?.map((client) => (
          <Link to={`/clients/${client.id}`} key={client.id}>
            <ClientListItem client={client} />
          </Link>
        ))}
      </LoadingAndError>
    </List>
  );
};

export default ClientList;
