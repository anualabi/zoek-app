import React from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledInputGroup } from './FieldStyles';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  startIcon?: string;
  endIcon?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon, endIcon, ...props }, ref) => {
    const id = React.useContext(FieldContext);

    return (
      <StyledInputGroup className="input-group">
        {startIcon && <span className="material-icons start-icon">{startIcon}</span>}
        <input ref={ref} id={id} {...props} />
        {endIcon && <span className="material-icons end-icon">{endIcon}</span>}
      </StyledInputGroup>
    );
  }
);

Input.displayName = 'Field.Input';

Input.propTypes = {
  startIcon: PropTypes.string,
  endIcon: PropTypes.string
};

Input.defaultProps = {
  startIcon: '',
  endIcon: ''
};
