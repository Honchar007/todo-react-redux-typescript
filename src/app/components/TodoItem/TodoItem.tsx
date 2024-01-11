import React, { useState } from "react";

// store
import { useAppDispatch } from "../../store/hooks";
import { checkedTodo, editModeOn, removeTodo } from "../../store/todoSlicer";

// models
import toDo from "../../models/todo";

// styles
import './TodoItem.scss';

// assets
import close from '../../assets/close.svg';
import edit from '../../assets/edit.svg';

function TodoItem ({ id, checked, name, description, date }: toDo) {
  const dispatch = useAppDispatch();
  const [done, setDone] = useState(!!checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDone(!done);
    dispatch(checkedTodo({ id, checked, name, description, date }));
  }

  const handleRemove = (): void => {
    dispatch(removeTodo(id as string))
  }

  const handleEdit = (): void => {
    dispatch(editModeOn({ id, checked, name, description, date }));
  }

  return (
    <div className="todo-wrapper">
      <div className="todo-main">
        <div className="todo-title">{name}</div>
        <label className="switch">
          <input
            type="checkbox"
            checked={done}
            onChange={handleChange}
          />
          <span className="slider round"></span>
        </label>
        <div className="todo-desc">
          <strong>Description:</strong> {description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis nisi ut arcu ultricies tincidunt. Sed nisl magna, vehicula sit amet cursus non, fermentum ut mi.
        </div>
        <div className="todo-date">
          {new Date(date as string).toLocaleDateString()}
        </div>
      </div>
      <div className="close">
        <div
          onClick={handleEdit}
          className=""
        >
          <img src={edit} alt="edit" />
        </div>
        <div
          onClick={handleRemove}
          className=""
        >
          <img src={close} alt="close" />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
