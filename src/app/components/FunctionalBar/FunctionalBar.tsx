import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

// store
import { useAppDispatch } from '../../store/hooks';
import { addTodo, fetchTodos, selectEditMode, selectLoading, selectTodos } from '../../store/todoSlicer';

// components
import StyledButton from '../StyledButton/StyledButton';
import TodoItem from '../TodoItem/TodoItem';

// styles
import './FunctionalBar.scss';

function FunctionalBar () {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoading);
  const todos = useSelector(selectTodos);
  const isEditMode = useSelector(selectEditMode);

  const [todo, setTodo] = useState('');
  const [desc, setDesc] = useState('');
  const add = () => {
    dispatch(addTodo(
      {
        checked: false,
        id: uuidv4(),
        name: todo,
        description: desc,
      }
    ));

    setTodo('');
    setDesc('');
  }

  useEffect(() => {
    dispatch(fetchTodos());
  },[dispatch]);

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
          name={loading ? 'Loading...' : 'Add'}
        />
        <StyledButton
          onClick={add}
          name='Edit'
          disabled={!isEditMode}
        />
        <StyledButton
          onClick={add}
          name='Cancel'
          disabled={!isEditMode}
        />
      </div>
      {todos && todos.map((el) =>
      <TodoItem
        key={el.id as string}
        id={el.id}
        checked={el.checked}
        name={el.name}
        description={el.description}
        date={el.date}
      />)}
    </div>
   );
}

export default FunctionalBar;
