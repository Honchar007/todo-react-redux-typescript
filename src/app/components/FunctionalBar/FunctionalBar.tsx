import React, { useState } from 'react';
import StyledButton from '../StyledButton/StyledButton';

// styles
import './FunctionalBar.scss';
import TodoItem from '../TodoItem/TodoItem';

function FunctionalBar () {
  const [todo, setTodo] = useState('');
  const [desc, setDesc] = useState('');

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
      <input
        type='text'
        name='description'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder='Something...'
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
        <StyledButton
          onClick={add}
          name='Cancel'
        />
      </div>
      <TodoItem
        id={0}
        checked={true}
        name='Go to ATB and buy bread'
        description='Only cutted bread'
        date={new Date()}
      />
    </div>
   );
}

export default FunctionalBar;
