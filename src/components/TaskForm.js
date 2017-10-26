import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            status: false
        }
    }

    onChange = event =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit2 = event =>{
        event.preventDefault();
        this.props.onSubmit1(this.state)
        this.onClear();
        
    }
    onClear =()=>{
        this.setState({
            name:'',
            status: false
        })
    }
   
  render() {
    return (
        <div>
        <div className="panel panel-warning">
            <div className="panel-heading">
                    <h3 className="panel-title">
                    ToDo
                        <span 
                            className="fa fa-times-circle text-right">
                        </span>
                    </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit2}>
                            <div className="form-group">
                                <label>Name </label>
                                <input
                                 type="text"
                                  className="form-control"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.onChange} />
                                </div>
                                <label>Status </label>
                                <select
                                 className="form-control" 
                                 name="status"
                                 value={this.state.status}
                                 onChange={this.onChange}
                                 >
                                    <option value={true}>Activate</option>
                                    <option value={false}>Hidden</option>
                                    </select>
                                    <div className="text-center">
                                        <button type="submit"
                                         className="btn btn-warning">
                                            <span className="fa fa-plus mr-5"></span>Save
                                            </button>&nbsp;
                                        <button type="button"
                                                onClick={this.onClear}
                                                 className="btn btn-danger">
                                            <span className="fa fa-close mr-5"></span>Cancel
                                            </button>
                                    </div>
                        </form>
                             </div>
                             </div>
                     </div>
                                        
    );
  }
}

export default TaskForm;
