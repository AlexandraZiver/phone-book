import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

import styles from "./LoadingAndError.module.scss";

const LoadingAndError = ({ children, status, error, dependence }) => {
  const loading = (dependence) => {
    if (dependence) {
      return <>Loading</>;
    }
    return <></>;
  };

  const containerClassNames = cx({
    [styles.ContainerErrorBig]: dependence == false && status == "error",
    [styles.ContainerError]: status == "error",
    ["loading-container"]: status == "loading" && dependence,
    [styles.LoadingContainer]: status == "loading" && !dependence,
  });

  if (status === "loading") {
    return (
      <div className={containerClassNames}>
        <Dimmer active>
          <Loader>{loading(dependence)}</Loader>
        </Dimmer>
      </div>
    );
  }
  if (status === "error") {
    return <div className={containerClassNames}>{error}</div>;
  }

  return <>{children}</>;
};

LoadingAndError.defaultProps = {
  size: false,
};

LoadingAndError.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
  error: PropTypes.string,
  dependence: PropTypes.bool,
};

export default LoadingAndError;
