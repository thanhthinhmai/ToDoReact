import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    return (
       <tr>
            <td>1</td>
            <td>Learn React</td>
            <td className="text-center">
                <span className="label label-danger">Active</span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning">
                    <span className="fa fa-pencil mr-5">Edit</span>
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger">
                    <span className="fa fa-trash mr-5">Delete</span>
                </button>
            </td>
        </tr>                                
    );
  }
}

export default TaskItem;
