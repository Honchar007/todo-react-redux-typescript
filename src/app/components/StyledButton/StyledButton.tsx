import React from 'react';

// styles
import './StyledButton.scss';

// models
type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  name: String,
  style?: React.CSSProperties,
  disabled?: boolean,
};

function StyledButton ({ onClick, name, style, disabled } : Props) {
  return (
    <button
      className='btn'
      onClick={onClick}
      style={{ ...style, opacity: disabled ? 0.5 : 1 }}
      disabled={disabled}
    >
      {name}
    </button>
   );
}

export default StyledButton;
