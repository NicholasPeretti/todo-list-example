import React from 'react';

class TodoInput extends React.Component {
  componentWillMount() {
    this.setState({
      text: ''
    });
  }

  handleOnChange(e) {
    var text = e.target.value;
    this.setState({
      text
    });
  }

  handleOnKeyUp(e) {
    if (e.keyCode !== 13) return;
    this.addTodo();
  }

  addTodo() {
    let {text} = this.state;
    text = text.trim();
    if (text) {
      this.props.onEnter(text);
      this.setState({
        text: ''
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='What needs to be done?'
          className='todo-input'
          value={this.state.text}
          onChange={this.handleOnChange.bind(this)}
          onKeyUp={this.handleOnKeyUp.bind(this)}
        />
      </div>
    )
  }
}

export default TodoInput;