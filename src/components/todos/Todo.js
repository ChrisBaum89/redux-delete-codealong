import React from 'react';

const Todo = props => {
  return (
    <li>
      <span>{props.todo.text}</span>
      <button onClick={() => props.delete(props.todo)}>Delete</button>
      </li>
  );
};

export default Todo;