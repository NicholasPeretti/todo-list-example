import React from 'react';
export default ({ todo, onComplete, onDelete }) => {
  const { text, checked, index } = todo;
  const toggle = () => {
    onComplete(index);
  }
  const deleteItem = () => {
    onDelete(index);
  }
  return (
    <li
      className="todo-item"
    >
      <div style={{width: '50px'}} onClick={toggle}>
        <input type="checkbox" checked={checked} readOnly={true}/>
      </div>
      <div style={{width: '400px'}} onClick={toggle}>
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
      <div style={{width: '50px', textAlign: 'center'}} onClick={onDelete}>
        <i className="fa fa-times"></i>
      </div>
    </li>
  );
};
