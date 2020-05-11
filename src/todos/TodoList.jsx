import React from 'react';
import { inject, observer } from 'mobx-react';
import TodoView from './TodoView';

@inject('todoStore') @observer
class TodoList extends React.Component {
  render() {
    const todoStore = this.props.todoStore;
    return (
      <div>
        { todoStore.report }
        <ul>
        { todoStore.todos.map(
          (todo, idx) => <TodoView todo={ todo } key={ idx } />
        ) }
        </ul>
        { todoStore.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
        <button onClick={ this.onNewTodo }>New Todo</button>
        <small> (double-click a todo to edit)</small>
        {/* <RenderCounter /> */}
      </div>
    );
  }

  onNewTodo = () => {
    this.props.todoStore.addTodo(prompt('Enter a new todo:','coffee plz'));
  }
}

export default TodoList;