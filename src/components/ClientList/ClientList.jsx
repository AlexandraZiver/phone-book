import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import { Size } from "../../constants/size";
import useDebouncedState from "../../hooks/useDebouncedState";
import useClients from "../../store/hooks/clients";
import CustomInfiniteScroll from "../CustomInfiniteScroll";
import LoadingAndError from "../LoadingAndError";
import Search from "../Search";
import styles from "./ClientList.module.scss";
import ClientListItem from "./ClientListItem";

const ClientList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [visibleClients, setVisibleClients] = useState();
  const debouncedSearchInput = useDebouncedState(searchInput);

  const { clients: clientsFound, status, error } = useClients(debouncedSearchInput);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <List id="scrollableContainer" className={styles.Container} selection verticalAlign="middle">
      <LoadingAndError status={status} error={error} size={Size.SMALL}>
        <Search value={searchInput} onChange={handleChange} />
        {visibleClients?.map((client) => (
          <Link to={`/clients/${client.id}`} key={client.id}>
            <ClientListItem client={client} />
          </Link>
        ))}
        <CustomInfiniteScroll
          setData={setVisibleClients}
          scrollableTargetId="scrollableContainer"
          dataArray={clientsFound}
          limit={15}
        />
      </LoadingAndError>
    </List>
  );
};

export default ClientList;
