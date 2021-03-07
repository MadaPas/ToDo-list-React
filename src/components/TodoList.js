import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todoList, toggleTodo, deleteTodo }) => {
  const notDoneList = todoList.filter(e => e.status === 'notDone');
  const doneList = todoList.filter(e => e.status === 'done');

  const notDone = notDoneList.map(e => (
    <TodoCard
      id={e.id}
      name={e.name}
      isDone={false}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo} />
  ));

  const done = doneList.map(e => (
    <TodoCard
      id={e.id}
      name={e.name}
      isDone
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo} />
  ));

  return (
    <>
      <div className="items-container">
        <h2 className="info">
          {notDone.length > 0 || done.length > 0 ? 'Tasks:' : 'There is nothing here, babe! Add some tasks :)'}
        </h2>
        {notDone.length > 0 ? (
          <div className="the-todos">
            <h3 className="task-label">Not done:</h3>
            {notDone}
          </div>
        ) : null}
        {done.length > 0 ? (
          <div className="the-dones">
            <h3 className="task-label">Done:</h3>
            {done}
          </div>
        ) : null}
      </div>

    </>
  );
};

export default TodoList;
