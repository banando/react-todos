import React from 'react';
import TodosListHeader from './todos-list-header';

export default class TodoList extends React.Component {
  render() {
    console.log(this.props.todos);
    return(
      <table>
        <TodosListHeader />
      </table>
    );
  }
}
