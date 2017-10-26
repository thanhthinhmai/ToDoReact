import React, { Component } from 'react';

class TaskItem extends Component {
    // constructor(props){
    //     super(props);
    // }
    onUpdateStatus =()=>{
       this.props.onUpdateStatusItem(this.props.task.id)
    }

    onDelete = ()=>{
        this.props.onDelete(this.props.task.id)
    }
    
  render() {
    var { task,index } = this.props;
    return (
       <tr>
            <td>{ index +1 }</td>
            <td>{ task.name} </td>
            <td className="text-center">
                <span className={ task.status === true ? 'label label-danger ':
                 'label label-success' }
                 onClick = { this.onUpdateStatus }
                 >{task.status === true ? 'Active':'Hidden'}</span>
            </td>
            <td className="text-center">
                <button type="button" 
                className="btn btn-warning">
                    <span className="fa fa-pencil mr-5">Edit</span>
                </button>
                &nbsp;
                <button type="button" 
                onClick = { this.onDelete }
                className="btn btn-danger">
                    <span className="fa fa-trash mr-5">Delete</span>
                </button>
            </td>
        </tr>                           
    );
  }
}

export default TaskItem;
