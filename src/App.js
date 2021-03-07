/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import {
  setItemInLocalStorage, getItemFromLocalStorage, createCard,
} from './helper';

const App = () => {
  const [todoList, setTodoList] = useState(getItemFromLocalStorage() ? getItemFromLocalStorage() : []);

  const toggleTodo = element => {
    const storageTodoList = getItemFromLocalStorage();
    const { id } = element.currentTarget.parentElement;
    const cardInStorage = storageTodoList.findIndex(card => card.id === id);
    const updatedCard = storageTodoList[cardInStorage];
    updatedCard.status = updatedCard.status === 'notDone' ? 'done' : 'notDone';
    storageTodoList[cardInStorage] = updatedCard;
    setTodoList(storageTodoList);
  };

  const deleteTodo = element => {
    const toDoListFromStorage = JSON.parse(localStorage.getItem('list'));
    const { id } = element.currentTarget.parentElement;
    const cardInStorage = toDoListFromStorage.findIndex(el => el.id === id);
    toDoListFromStorage.splice(cardInStorage, 1); // 1 element to be removed
    setTodoList(toDoListFromStorage);
  };

  useEffect(() => {
    setItemInLocalStorage(todoList);
  }, [todoList]);

  const handleSubmit = element => {
    element.preventDefault();
    const name = element.target[0].value;
    const todo = createCard(name);
    return setTodoList(prevList => [...prevList, todo]);
  };

  return (
    <>
      <Navbar />
      <h1 className="title">Welcome to your todo list</h1>
      <Form handleSubmit={handleSubmit} />
      <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Footer />
    </>
  );
};

export default App;
