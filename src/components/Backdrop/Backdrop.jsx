import PropTypes from "prop-types";
import React from "react";

import styles from "./Backdrop.module.scss";

const Backdrop = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

Backdrop.propTypes = {
  children: PropTypes.node,
};

export default Backdrop;
