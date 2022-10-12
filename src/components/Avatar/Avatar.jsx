import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Image } from "semantic-ui-react";

import styles from "./Avatar.module.scss";

const Avatar = ({ client, BigImage }) => {
  const color = ["#FF5630", "#FFAB00", "#36B37E", "#0065FF", "#6554C0", "#00B8D9", "#5E6584"];
  const background = color[Math.round(Math.random() * (color.length - 1))];
  const notAvatar = (image) => !image;
  const imageClassName = cx({
    [styles.Avatar]: true,
    [styles.NotFoundAvatar]: notAvatar(client.general.avatar),
    [styles.BigAvatar]: BigImage,
  });

  const showAvatar = (image) => {
    if (image) {
      return <Image circular src={image} className={imageClassName} />;
    }
    return (
      <div className={imageClassName} style={{ "background-color": background }}>
        {client.general.firstName[0].toUpperCase()}
        {client.general.lastName[0].toUpperCase()}
      </div>
    );
  };
  return <>{showAvatar(client.general.avatar)}</>;
};

Avatar.propTypes = {
  BigImage: PropTypes.bool,
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

export default Avatar;
