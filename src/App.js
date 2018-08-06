import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo(text) {
    this.state.todos.push({
      text,
      checked: false
    });
    this.setState(
      this.state
    )
  }

  onComplete(index) {
    var todo = this.state.todos[index];
    todo.checked = !todo.checked;
    this.setState(this.state);
  }

  render() {
    var todos = this.state.todos;
    return (
      <div className="App">
        <img src="todo.png" width="100"/>
        <TodoInput onEnter={this.addTodo.bind(this)} />
        <TodoList todos={todos} onComplete={this.onComplete.bind(this)}/>
      </div>
    );
  }
}

export default App;
