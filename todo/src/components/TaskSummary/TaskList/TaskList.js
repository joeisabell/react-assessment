import React, { Component } from 'react';
import { connect } from 'react-redux'

import './TaskList.css';
import { dispatchGetTasks } from './../../../redux/services/taskServices';
import Task from './Task/Task';

class TaskList extends Component {

  componentWillMount() {
    dispatchGetTasks();
  }

  render() {
    const { taskList, loading } = this.props;
    return (
      <div className="TaskList__container">
        <h3>Tasks</h3>
        <ul style={{listStyle:'none', padding:'0'}}>
          {
            loading ?
              'Loading....'
              :
              taskList.sort(task => task.complete ).map( (task, i) => {
                return <Task key={i} task={ task } />
              })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(TaskList)
