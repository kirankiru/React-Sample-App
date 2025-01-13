import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  variant,
  size,
  children,
  onClick,
  className,
  ...props
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  className: '',
  onClick: () => {},
};

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
