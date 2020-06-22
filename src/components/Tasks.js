import React, {Component} from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

class Tasks extends Component {
  render() {
    return <div className="flex flex-col items-center justify-center">
      {this.props.tasks.map(task => <Task task={task} key={task.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone}/>)}
    </div>     
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;