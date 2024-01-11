import React, { useState } from "react";

// models
import toDo from "../../models/todo";

// styles
import './TodoItem.scss';

// assets
import close from '../../assets/close.svg';
import { useAppDispatch } from "../../store/hooks";
import { removeTodo } from "../../store/todoSlicer";

function TodoItem ({ id, checked, name, description, date }: toDo) {
  const dispatch = useAppDispatch();
  const [done, setDone] = useState(!!checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDone(!done);
  }

  const handleRemove = (): void => {
    console.log('remove');
    dispatch(removeTodo(id as string))
  }

  return (
    <div className="todo-wrapper">
      <label className="switch">
        <input
          type="checkbox"
          checked={done}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>
      <div className="todo-main">
        <div className="todo-title">{name}</div>
        <div className="todo-desc">
          <strong>Description:</strong> {description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis nisi ut arcu ultricies tincidunt. Sed nisl magna, vehicula sit amet cursus non, fermentum ut mi.
        </div>
        <div className="todo-date">
          {new Date(date as string).toLocaleDateString()}
        </div>
      </div>
      <div
        onClick={handleRemove}
        className="close"
      >
        <img src={close} alt="close" />
      </div>
    </div>
  );
}

export default TodoItem;
