import React from 'react';
export default ({ todo, onComplete }) => {
  const { text, checked, index } = todo;
  const toggle = () => {
    onComplete(index);
  }
  return (
    <li
      className="todo-item"
      onClick={toggle}
    >
      <div style={{width: '50px', verticalAlign: 'top'}}>
        <input type="checkbox" checked={checked} readOnly={true}/>
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
