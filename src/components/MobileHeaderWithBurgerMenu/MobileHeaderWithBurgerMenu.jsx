import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Icon } from "semantic-ui-react";

import styles from "./MobileHeaderWithBurgerMenu.module.scss";

const MobileHeaderWithBurgerMenu = ({ isOpen, title, onOpen }) => {
  const closeList = (event) => {
    if (event.code === "Escape") {
      onOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeList, true);
    return () => {
      document.removeEventListener("keydown", closeList, false);
    };
  }, []);

  return (
    <div className={styles.AdaptiveContainer}>
      <button className={styles.Button} onClick={() => onOpen(!isOpen)}>
        <Icon size="large" name={isOpen ? "close" : "bars"} />
      </button>
      <p className={styles.Content}>{title}</p>
    </div>
  );
};

MobileHeaderWithBurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onOpen: PropTypes.func.isRequired,
};

export default MobileHeaderWithBurgerMenu;
