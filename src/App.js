import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    let todos = null;

    if ( localStorage.getItem('todos') === null ) {
      todos = [
        {
          id: null,
          title: 'placeholder',
          completed: true
        },
        {
          id: 1,
          title: 'Set up meeting',
          completed: false
        },
        {
          id: 2,
          title: 'Do grooceries',
          completed: false
        },
        {
          id: 3,
          title: 'Take out trash',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }

    this.setState({ todos: todos });
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }) })
  }

  delTodo = (id) => {
    const NewTodos = [...this.state.todos.filter(todo => todo.id !== id)];

    this.updateTodos(NewTodos);
  }

  Addtodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }

    const newTodos = [...this.state.todos, newTodo]
    .sort((a, b) => a.title.toLowerCase() !== b.title.toLowerCase() ? a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 : 0);

    this.updateTodos(newTodos);
  }

  updateTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/react-todolist" render={props => (
              <React.Fragment>
                <AddTodo Addtodo={this.Addtodo} />
                <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete} />
              </React.Fragment>
            )} />
            <Route path="/react-todolist/about" component={About} />
          </div>
        </div>
      </Router>
      );
  }
}

export default App;
