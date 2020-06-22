import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
  taskCompleted() {
    return {
    color: this.props.task.done ? "#718096": "#de3618"}
  }

  render() {
    const {task} = this.props;
    return (
      <div className="my-3 bg-white rounded-lg shadow-lg md:w-1/3 sm:w-full">
        <div className="flex justify-between px-5 py-4 border-b border-gray-100">
          <div>
            <i className="text-orange-500 fa fa-exclamation-triangle"></i>
            <span style={this.taskCompleted()} className="text-lg font-bold text-gray-700 uppercase">n.{task.id} - {task.title}</span>
          </div>
          <div>
            <button><i className="text-red-500 transition duration-150 fa fa-times-circle hover:text-red-600"></i></button>
          </div>
        </div>
    
        <div className="px-10 py-5 text-gray-600">
          {task.description}
          {task.done ? '- true': '- false'} - {task.id}
        </div>
    
        <div className="flex justify-end px-5 py-4">
          <input type="checkbox" className="px-4 py-2 mx-4" onChange={this.props.checkDone.bind(this, task.id)}/>
          <button onClick={this.props.deleteTask.bind(this, task.id)}
            className="px-3 py-2 text-sm text-gray-500 transition duration-150 border-2 border-red-400 rounded hover:border-red-700 hover:text-gray-700">Delete</button>
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task;