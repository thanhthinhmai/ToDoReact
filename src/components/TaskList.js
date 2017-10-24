import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    render() {
        var { tasks } = this.props;
        var elmTasks = tasks.map((tasks, index)=>{
            return <TaskItem key={tasks.id} index={index} task={tasks}/>
        })
        return (
            <div className="row mt-15">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                    >
                                        <option value={1}>All</option>
                                        <option value={0}>Hidden</option>
                                        <option value={1}>Active</option>
                                    </select>                                  
                                </td>
                             <td></td>
                            </tr>
                            {elmTasks}
                        </tbody>
                    </table>
             </div>
        );
    }
}

export default TaskList;
