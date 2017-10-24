import React, { Component } from 'react';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks : [],
      isDisplayForm: false
    }
    
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        this.setState({
          tasks: tasks
        })
    }
  }
  onGenerate = () =>{
   let tasks = [
      {
        id:this.generateID(),
        name: 'ToDo1',
        status: true
      },
      {
        id:this.generateID(),
        name: 'ToDo2',
        status: false
      },
      {
        id:this.generateID(),
        name: 'ToDo3',
        status: true
      }
    ]
   
   localStorage.setItem('tasks', JSON.stringify(tasks))
  } 
  s4(){
    return Math.floor((1 + Math.random())* 0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  } 

  onToggleForm = () =>{
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    })
    
  }
  render() {
    var { tasks,isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm === true ? <TaskForm /> : '';
    return (
      <div className="container">
          <div className="text-center">
              <h1>Manager</h1>
          </div>
        <div className="row">
              <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
              {elmTaskForm} 
                </div>
         <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8': 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
         <button type="button"
        className="btn btn-primary" 
         onClick={this.onToggleForm}
         >Add To Do</button>
         <button type="button" 
         className="btn btn-danger ml-5"
         onClick = {this.onGenerate}
         >List To Do</button>
        <Control />

        <TaskList tasks={ tasks }/>
        </div>
        </div>  
      </div>
    );
  }
}

export default App;
