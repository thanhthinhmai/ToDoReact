import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskForm />   
      </div>
    );
  }
}

export default App;
