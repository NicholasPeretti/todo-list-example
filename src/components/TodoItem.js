import React from 'react';
export default ({ todo, onComplete, index }) => {
  const { text, checked } = todo;
  const onChange = () => {
    onComplete(index);
  }
  return (
    <li
      style={{
        margin: '15px 0px'
      }}
    >
      <input type="checkbox" {...checked} onChange={onChange}/>
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
