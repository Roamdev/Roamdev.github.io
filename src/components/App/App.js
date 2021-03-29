import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter'
import AddItem from '../AddItem'

import './App.scss'


export default class App extends Component {
  maxId = 20;
  state = {
    todoData : [
      this.createTodoItem('Drink Coffe'),
      this.createTodoItem('Look For A Job'),
      this.createTodoItem('Think About IT')
    ]
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  addedItem = (text) => {
    const newItem = this.createTodoItem(text);
    
    this.setState(({todoData}) => {
      const addItemArr = [
        ...todoData,
        newItem
      ];
      return {
        todoData: addItemArr
      };
    });
  };
  onToggleImportant = (id) => {
    console.log('biba')
  };
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done};
      const newArray = [
        ...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)
      ];
      return {
        todoDate: newArray
      }
    })

  };

  render() {
    const {todoData} = this.state;
    return (
      <div className='todo-app'>
      <AppHeader toDo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList
        todos={todoData}
        onDeleted={this.deleteItem}
        onToggleImportant={this.onToggleImportant}
        onToggleDone={this.onToggleDone}
      />
      <AddItem
        onAdded={this.addedItem}
      />
    </div>
    )
  };
};
