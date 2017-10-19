import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    render() {
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
                                        <option>All</option>
                                        <option>Hidden</option>
                                        <option>Active</option>
                                    </select>
                                </td>
                                <td>
                                    <TaskItem />
                                </td>
                            </tr>
                        </tbody>
                    </table>
             </div>
        );
    }
}

export default TaskList;
