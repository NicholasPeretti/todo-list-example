import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    var { todos } = this.props;
    return (
        <ul
          className='todo-list'
          style={{
            listStyle: 'none'
          }}
        >
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              todo={todo}
              onComplete={this.props.onComplete}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
    );
  }
}

export default TodoList;
