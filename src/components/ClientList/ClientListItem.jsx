import PropTypes from "prop-types";
import React from "react";
import { Image, List } from "semantic-ui-react";

import styles from "./ClientListItem.module.scss";

const ClientListItem = ({ client }) => {
  const handleClick = () => {
    alert("Do you want to see the client?");
  };

  return (
    <List.Content className={styles.Container} onClick={handleClick}>
      <Image circular src={client.general.avatar} className={styles.Avatar} />
      <div className={styles.Content}>
        {client.general.firstName} {client.general.lastName}
        <List.Content className={styles.Job}>{client.job.title}</List.Content>
      </div>
    </List.Content>
  );
};

ClientListItem.propTypes = {
  client: PropTypes.shape({
    general: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatar: PropTypes.string,
    }),
    job: PropTypes.shape({
      company: PropTypes.string,
      title: PropTypes.string,
    }),
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zipCode: PropTypes.string,
      country: PropTypes.string,
    }),
  }).isRequired,
};

export default ClientListItem;
