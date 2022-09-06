import React from "react";

import ClientList from "../ClientList";
import styles from "./Wrapper.module.scss";

const Wrapper = () => {
  return (
    <div className={styles.Container}>
      <ClientList />
    </div>
  );
};

export default Wrapper;
