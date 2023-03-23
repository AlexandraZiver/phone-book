import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";

import styles from "./DropDownList.module.scss";

const DropDownList = ({ setIsOpen }) => {
  const [isOpen, setOpen] = useState(false);

  const closeList = (event) => {
    if (event.code == "Escape") {
      setOpen(false);
    }
  };

  const handleOpen = () => setOpen(!isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", closeList, true);
    document.removeEventListener("keydown", closeList, false);
  }, []);

  return (
    <div className={styles.AdaptiveContainer}>
      <button className={styles.Button} onClick={handleOpen}>
        <Icon size="large" name={isOpen ? "close" : "bars"} />
      </button>
      <p className={styles.Content}>List</p>
    </div>
  );
};

DropDownList.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default DropDownList;
