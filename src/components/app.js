import React from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'make react todo app',
    isComplete: false
  },
  {
    task: 'Eat dinner',
    isComplete: true
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }
  render() {
    return (
        <div>
          <h1>React Todos App</h1>
          <TodosList todos={this.state.todos} />
        </div>
      );
  }
}
