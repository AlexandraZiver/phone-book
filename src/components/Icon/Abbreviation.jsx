import PropTypes from "prop-types";
import React from "react";

const Abbreviation = ({ client }) => {
  const showAbbrev = (name) => {
    if (name) {
      return name[0].toUpperCase();
    }
  };

  return (
    <div>
      {showAbbrev(client.general.firstName)}
      {showAbbrev(client.general.lastName)}
    </div>
  );
};

Abbreviation.propTypes = {
  client: PropTypes.shape({
    general: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      avatar: PropTypes.string,
    }),
    job: PropTypes.shape({
      company: PropTypes.string,
      title: PropTypes.string,
    }),
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zipCode: PropTypes.string,
      country: PropTypes.string,
    }),
  }).isRequired,
};

export default Abbreviation;
