import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';
import Navegator from './components/Nav';


class App extends Component {
  state = {
    tasks: tasks
  }

  AddTask = (title, description) => {
    const newTask = {
      "id":this.state.tasks.length,
      "title": title,
      "description": description,
       done:false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask});
  }

  checkDone = (id) => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({tasks: newTask});
  }

  render() {
    return (
      <div>
        <Router>
          <Navegator/>
          <div className="mt-20">
            <Route exact path="/" render={() => {
              return <div>
                <TaskForm addtask={this.AddTask}/>
                <Tasks 
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                  checkDone={this.checkDone}/>
              </div>
              }}>
            </Route>
            <Route exact path="/posts" render={() => {
              return <Posts/>
            }}>
            
            </Route>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
