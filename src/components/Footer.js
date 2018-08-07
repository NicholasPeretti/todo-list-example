import React from 'react';

export default ({todos, setFilter}) => {
  if (!todos.length) return (<div></div>);
  return (
    <div className='footer'>
      <button
        onClick={() =>
          setFilter({checked: true})
        }
      >Show completed</button>
      <button
        onClick={() =>
          setFilter(null)
        }
      >Show All</button>
      <button
        onClick={() =>
          setFilter({checked: false})
        }
      >Show to complete</button>
    </div>
  )
}