import React from 'react';

const TodoCard = ({
  id,
  name,
  isDone,
  toggleTodo,
  deleteTodo,
}) => (
  <div className="card" id={id}>
    <div role="button" tabIndex="0" className="content" onClick={toggleTodo} onKeyDown={toggleTodo}>
      <h2 className="name">{name}</h2>
    </div>
    {isDone ? (
      <button type="submit" className="delete" onClick={deleteTodo}>
        Delete
        {' '}
        <i className="fas fa-trash-alt" />
      </button>
    ) : null}
  </div>
);

export default TodoCard;
