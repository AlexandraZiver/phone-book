import PropTypes from "prop-types";
import React, { useMemo } from "react";

const Abbreviation = ({ firstName, lastName }) => {
  const firstNameAbbreviation = firstName?.charAt(0);
  const lastNameAbbreviation = lastName?.charAt(0);

  const abbreviation = useMemo(
    () => [firstNameAbbreviation, lastNameAbbreviation].join("").toUpperCase(),
    [firstName, lastName],
  );

  return <div>{abbreviation}</div>;
};

Abbreviation.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

export default Abbreviation;
