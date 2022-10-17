import cx from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import Abbreviation from "./Abbreviation";
import styles from "./Avatar.module.scss";

const Avatar = ({ client, size }) => {
  const [isAvatarValid, setIsAvatarValid] = useState(true);
  const sizeCheck = () => {
    if (size == "small") {
      return styles.Small;
    }
    if (size == "large") {
      return styles.Large;
    }
  };

  const checkImage = (url) =>
    new Promise((resolve) => {
      const img = new Image();

      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);

      img.src = url;
    });

  useEffect(() => {
    const checkIsAvatarValid = async () => {
      setIsAvatarValid(await checkImage(client.general.avatar));
    };

    checkIsAvatarValid();
  }, [client.general.avatar]);

  const imageClassName = cx({
    [styles.Avatar]: true,
    [sizeCheck()]: true,
  });

  if (isAvatarValid) {
    return (
      <div
        className={imageClassName}
        style={{ backgroundImage: `url(${client.general.avatar})` }}
      />
    );
  }

  return (
    <div className={imageClassName}>
      <Abbreviation client={client} />
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.string,
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
