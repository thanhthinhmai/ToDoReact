import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="text-center">
              <h1>Manager</h1>
          </div>
        <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <TaskForm /> 
                </div>
         <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
         <button type="button" class="btn btn-primary"><span class="fa fa-plus mr-5"></span>Add To Do</button>
        <Control />
        <TaskList />
        </div>
        </div>  
      </div>
    );
  }
}

export default App;
