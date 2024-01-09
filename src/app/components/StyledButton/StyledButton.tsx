import React from 'react';

// styles
import './StyledButton.scss';

// models
type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  name: String,
  style?: React.CSSProperties,
};

function StyledButton ({ onClick, name, style } : Props) {
  return (
    <button className='btn' onClick={onClick} style={style}>
      {name}
    </button>
   );
}

export default StyledButton;
