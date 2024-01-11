import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

// store
import { useAppDispatch } from '../../store/hooks';
import {
  addTodo,
  clearEdit,
  fetchTodos,
  selectCurrEdit,
  selectEditMode,
  selectLoading,
  selectTodos,
  updateTodo
} from '../../store/todoSlicer';

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
  const currEditToDo = useSelector(selectCurrEdit)

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

  const edit = () => {
    dispatch(updateTodo(
      {
        name: todo,
        description: desc,
      }
    ));
    setTodo('');
    setDesc('');
  }

  const clear = () => {
    dispatch(clearEdit());
    setTodo('');
    setDesc('');
  }

  useEffect(() => {
    if(isEditMode) {
      setTodo(currEditToDo.name as string);
      setDesc(currEditToDo.description as string);
    }
  },[isEditMode, currEditToDo]);

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
        placeholder='Write your todo...'
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
          onClick={edit}
          name='Edit'
          disabled={!isEditMode}
        />
        <StyledButton
          onClick={clear}
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
