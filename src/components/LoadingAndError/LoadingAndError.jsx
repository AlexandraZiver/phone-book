import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

import { Size } from "../../constants/size";
import styles from "./LoadingAndError.module.scss";

const LoadingAndError = ({ children, status, error, size, text }) => {
  const loading = (text) => {
    if (text) {
      return <>Loading</>;
    }

    return null;
  };

  const containerClassNames = cx({
    [styles.ContainerErrorBig]: size == Size.Big && status == "error",
    [styles.ContainerError]: status == "error",
    [styles.LoadingContainerBig]: status == "loading" && size == Size.BIG,
    [styles.LoadingContainer]: status == "loading" && size == Size.SMALL,
  });

  if (status === "loading") {
    return (
      <div className={containerClassNames}>
        <Dimmer active>
          <Loader>{loading(text)}</Loader>
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
  text: false,
};

LoadingAndError.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
  error: PropTypes.string,
  dependence: PropTypes.bool,
  size: PropTypes.string,
  text: PropTypes.bool,
};

export default LoadingAndError;
