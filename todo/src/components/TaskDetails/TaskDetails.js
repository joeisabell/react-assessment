import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import './TaskDetails.css';
import Task from './Task/Task';
import EditTask from './EditTask/EditTask';

import { dispatchGetTasks, dispatchDeleteTask, dispatchUpdateTask } from './../../redux/services/taskServices'

class TaskDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      redirectToHome: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.complete = this.complete.bind(this);
    this.delete = this.delete.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    })
  }

  redirect() {
    this.setState({redirectToHome:true})
  }

  delete() {
    dispatchDeleteTask(this.props.task.id)
    this.setState({redirectToHome:true})
  }

  complete() {
    const{ task } = this.props;
    dispatchUpdateTask(task.id, {...task, complete:true })
    this.setState({redirectToHome:true})
  }

  componentWillMount() {
    this.props.task ?
    ' ' : dispatchGetTasks();
  }

  render() {
    const{ task } = this.props;
    const{ edit, redirectToHome } = this.state;

    return (
      <div>
        <div className="TaskDetails__actions">
          <Link to='/'>Back to All Tasks</Link>
          <span>
            <button disabled={ edit } onClick={ this.complete }> Complete </button>
            <button disabled={ edit } onClick={ this.toggleEdit }> Edit </button>
            <button disabled={ edit } onClick={ this.delete }> Delete </button>
          </span>
        </div>
        {
          task ?
            edit ?
              <EditTask task={ task } toggleEdit={ this.toggleEdit } redirect={ this.redirect } />
              :
              <Task task={ task } />
            :
            'Loading..'
        }
        { redirectToHome ? <Redirect to="/" /> : '' }
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const{ id } = ownProps.match.params;
  return {
    task: state.taskList.find(task => task.id == id)
  }
}

export default connect(mapStateToProps)(TaskDetails)
