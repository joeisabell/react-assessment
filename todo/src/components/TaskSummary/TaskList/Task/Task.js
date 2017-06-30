import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dispatchDeleteTask, dispatchUpdateTask } from './../../../../redux/services/taskServices';

import './Task.css'

class Task extends Component {
  render() {
    const{ task } = this.props;
    return (
      <li className={`Task__container ${task.complete ? "Task__completed": ""}`}>
        <Link className="TaskDetails_Task__title" to={ `/task/${task.id}` }>{ task.title}</Link>
        <span>
          <button
            disabled={ task.complete }
            onClick={ () => dispatchUpdateTask(task.id, {...task, complete:true} ) }
          >
            Complete
          </button>
          <button style={{background:'#ea4335'}} onClick={ () => dispatchDeleteTask(task.id) }>Delete</button>
      </span>
      </li>
    )
  }
}

export default Task;
