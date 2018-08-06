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
      <div style={{width: '50px', verticalAlign: 'top'}}>
        <input type="checkbox" checked={checked}/>
      </div>
      <div style={{width: '450px'}}>
      {checked ?
        <span
          style={{
            color: '#BBB',
            textDecoration: 'line-through'
          }}
        >{
          text}
        </span>
      : text}
      </div>
    </li>
  );
};
