import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useParams } from "react-router-dom";
import { List } from "semantic-ui-react";

import { Avatar } from "../Icon";
import styles from "./ClientListItem.module.scss";

const ClientListItem = ({ client }) => {
  const { id } = useParams();

  const containerClassName = cx({
    [styles.Container]: true,
    [styles.ContainerSelected]: id == client.id,
  });

  return (
    <div className={containerClassName}>
      <Avatar
        avatar={client.general.avatar}
        firstName={client.general.firstName}
        lastName={client.general.lastName}
        size="small"
      />
      <div className={styles.Content}>
        {client.general.firstName} {client.general.lastName}
        <List.Content className={styles.Job}>{client.job.title}</List.Content>
      </div>
    </div>
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
    id: PropTypes.number,
  }).isRequired,
};

export default ClientListItem;
