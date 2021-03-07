import React, { useState } from 'react';

const Form = ({ handleSubmit }) => {
  const [inputName, setName] = useState('');

  const nameChange = e => {
    const { value } = e.target;
    setName(() => value);
  };

  return (
    <>
      <form
        className="form"
        autoComplete="off"
        onSubmit={e => {
          handleSubmit(e);
          setName('');
        }}>
        <input required type="text" value={inputName} className="input" placeholder="Don't Forget to..." onChange={nameChange} />
        <button type="submit" className="press">
          <i className="fas fa-plus" />
        </button>
      </form>
    </>
  );
};

export default Form;
