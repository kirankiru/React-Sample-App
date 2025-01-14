import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Card = ({
  title,
  text,
  onEdit,
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
        <Button onClick={onEdit} title="Edit" variant="primary">
          Edit
        </Button>
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
  onEdit: PropTypes.func.isRequired,
};

export default Card;
