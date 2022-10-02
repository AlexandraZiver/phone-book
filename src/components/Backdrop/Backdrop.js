import PropTypes from "prop-types";
import React from "react";

import style from "./Backdrop.module.scss";

const Backdrop = ({ children }) => {
  return <div className={style.Container}>{children}</div>;
};

Backdrop.propTypes = {
  children: PropTypes.node,
};

export default Backdrop;
