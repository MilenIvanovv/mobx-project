import React, { Component } from 'react';
import observableTodoStore from './TodoStore';
import TodoList from './TodoList';
import { Provider } from "mobx-react";

const store = new observableTodoStore();

export default class TodosPage extends Component {
  render() {
    return (
      <div>
        <Provider todoStore={ store }>
          <TodoList />
        </Provider>
      </div>
    )
  }
}
