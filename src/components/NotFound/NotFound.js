import React from "react";

import style from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={style.Container}>
      <p className={style.Text}>Error! The Client is not found </p>
    </div>
  );
};

export default NotFound;
