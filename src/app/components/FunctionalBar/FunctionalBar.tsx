import React, { useState } from 'react';
import StyledButton from '../StyledButton/StyledButton';

// styles
import './FunctionalBar.scss';

function FunctionalBar () {
  const [todo, setTodo] = useState('');

  const add = () => {}

  return (
    <div className='container-func'>
      <h1>Todo list</h1>
      <input
        type='text'
        name='name'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='I wanna buy...'
        className='input-todo'
      />
      <div className='btn-wrapper'>
        <StyledButton
          onClick={add}
          name='Add'
        />
        <StyledButton
          onClick={add}
          name='Edit'
        />
      </div>
    </div>
   );
}

export default FunctionalBar;
