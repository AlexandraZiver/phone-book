import cx from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useState } from "react";

import checkImageUrl from "../utils/image";
import Abbreviation from "./Abbreviation";
import styles from "./Avatar.module.scss";

const Avatar = ({ lastName, firstName, avatar, size, fallbackBackgroundColor }) => {
  const [isAvatarValid, setIsAvatarValid] = useState(true);
  const stylesForSize = useMemo(() => ({ small: styles.Small, large: styles.Large }), [size]);

  useEffect(() => {
    const checkIsAvatarValid = async () => {
      setIsAvatarValid(await checkImageUrl(avatar));
    };
    checkIsAvatarValid();
  }, [avatar]);

  const avatarClassName = cx([styles.Avatar], [stylesForSize[size]]);

  if (isAvatarValid) {
    return <div className={avatarClassName} style={{ backgroundImage: `url(${avatar})` }}></div>;
  }

  return (
    <div className={avatarClassName} style={{ backgroundColor: fallbackBackgroundColor }}>
      <Abbreviation firstName={firstName} lastName={lastName} />
    </div>
  );
};

Avatar.defaultProps = {
  size: "styles.Small",
  fallbackBackgroundColor: "rgba(136, 156, 209, 0.859)",
};
Avatar.propTypes = {
  fallbackBackgroundColor: PropTypes.string,
  size: PropTypes.string,
  BigImage: PropTypes.bool,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
};

export default Avatar;
