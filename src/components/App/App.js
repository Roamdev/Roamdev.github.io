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

  addItem = (text) => {
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
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id ===id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};
    return[
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx +1)
    ];
  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };

  render() {
    const {todoData} = this.state;
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
      <div className='todo-app'>
        <AppHeader toDo={todoCount} done={doneCount} />
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
        <AddItem onAddItem={this.addItem}/>
      </div>
    )
  };
};
