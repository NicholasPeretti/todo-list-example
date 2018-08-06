import React from 'react';
export default ({ todo, onComplete, index }) => {
  const { text, checked } = todo;
  const toggle = () => {
    onComplete(index);
  }
  return (
    <li
      className="todo-item"
      onClick={toggle}
    >
      <input type="checkbox" checked={checked} />
      {checked ?
        <span
          style={{
            color: 'grey',
            textDecoration: 'line-through'
          }}
        >{
          text}
        </span>
      : text}
      <br />
    </li>
  );
};
