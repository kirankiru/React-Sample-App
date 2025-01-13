import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: '',
  text: '',
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
