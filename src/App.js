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
      isDisplayForm: false,
      taskEditing: null
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
  onSubmit = (data) =>{
    let { tasks,  } = this.state;
      data.id = this.generateID()
      tasks.push(data);
      this.setState({
        tasks: tasks
      })
     localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  
  onUpdateStatusApp = (id)=>{
    let { tasks } = this.state;    
    let index = this.findIndex(id);
    if(index !== -1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks : tasks
      })
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  findIndex = (id) =>{
    let { tasks } = this.state;
    let result = -1
    tasks.forEach((task, index)=>{    
      if(task.id === id){ 
        result = index;
      }
    })
    return result;  
  }

  onDelete = (id) =>{
    let { tasks } =this.state;
    let index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index, 1);
      this.setState({
        tasks : tasks
      })
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
    
  }
  render() {
    var { tasks,isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm === true ? 
    <TaskForm onSubmit1={this.onSubmit}/> : '';
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
        
        <Control />

        <TaskList 
        onUpdateStatusList = {this.onUpdateStatusApp}
        onDelete = { this.onDelete }
        tasks={ tasks }/>
        </div>
        </div>  
      </div>
    );
  }
}

export default App;
