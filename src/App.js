import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import filter from 'lodash/filter';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'


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

  onDelete(index) {
    this.state.todos.splice(index, 1);
    this.setState(this.state);
  }

  setFilter(query) {
    this.setState({query});
  }

  getVisibleTodos() {
    const {query, todos} = this.state;
    var indexedTodos = todos.map((todo, index) => ({...todo, index}));
    return query ? filter(indexedTodos, query) : indexedTodos;
  }

  render() {
    var todos = this.getVisibleTodos();
    return (
      <div className="App">
        <img src="todo.png" width="100"/>
        <TodoInput onEnter={this.addTodo.bind(this)} />
        <TodoList
          todos={todos}
          onComplete={this.onComplete.bind(this)}
          onDelete={this.onDelete.bind(this)}
        />
        <Footer todos={this.state.todos} setFilter={this.setFilter.bind(this)}/>
      </div>
    );
  }
}

export default App;
