import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Image, List } from "semantic-ui-react";

import styles from "./ClientListItem.module.scss";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8700e74 (fix/clients-details)
const ClientListItem = ({ client, isSelected }) => {
  const containerClassName = cx({
    [styles.Container]: true,
    [styles.ContainerSelected]: isSelected,
  });

<<<<<<< HEAD
  return (
    <div className={containerClassName}>
=======
const ClientListItem = ({ client }) => {
  return (
    <List.Content className={styles.Container}>
>>>>>>> 3233376 (feature/clients-details)
=======
  return (
    <div className={containerClassName}>
>>>>>>> 8700e74 (fix/clients-details)
      <Image circular src={client.general.avatar} className={styles.Avatar} />
      <div className={styles.Content}>
        {client.general.firstName} {client.general.lastName}
        <List.Content className={styles.Job}>{client.job.title}</List.Content>
      </div>
    </div>
  );
};

ClientListItem.defaultProps = {
  isSelected: false,
};

ClientListItem.propTypes = {
  isSelected: PropTypes.bool,
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
