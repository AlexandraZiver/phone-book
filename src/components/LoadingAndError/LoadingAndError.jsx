import cx from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

import { Size } from "../../constants/size";
import Status from "../../constants/status";
import styles from "./LoadingAndError.module.scss";

const LoadingAndError = ({ children, status, error, size, includeText }) => {
  const containerClassNames = cx({
    [styles.ContainerErrorBig]: size == Size.Big && status == Status.ERROR,
    [styles.ContainerError]: status == Status.ERROR,
    [styles.LoadingContainerBig]: status == Status.LOADING && size == Size.BIG,
    [styles.LoadingContainer]: status == Status.LOADING && size == Size.SMALL,
  });

  if (status === Status.LOADING) {
    return (
      <div className={containerClassNames}>
        <Dimmer active>
          <Loader>{includeText && "Loading..."}</Loader>
        </Dimmer>
      </div>
    );
  }
  if (status === Status.ERROR) {
    return <div className={containerClassNames}>{error}</div>;
  }

  return <>{children}</>;
};

LoadingAndError.defaultProps = {
  includeText: false,
  status: null,
  error: null,
  size: Size.SMALL,
};

LoadingAndError.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
  error: PropTypes.string,
  size: PropTypes.string,
  includeText: PropTypes.bool,
};

export default LoadingAndError;
