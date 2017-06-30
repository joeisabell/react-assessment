import React, { Component } from 'react';

import './EditTask.css';

import { dispatchUpdateTask} from './../../../redux/services/taskServices'

class EditTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.task.title,
      description: props.task.description
    }
    this.saveChanges = this.saveChanges.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cancelChanges = this.cancelChanges.bind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  saveChanges() {
    const { task, toggleEdit, redirect } = this.props;
    const { title, description } = this.state;
    dispatchUpdateTask(task.id, { ...task, title, description })
    toggleEdit()
    redirect()
  }

  cancelChanges() {
    const { title, description } = this.props.task;
    this.setState({ title, description })
  }

  render() {
    const{ task, toggleEdit } = this.props;
    const{ title, description } = this.state
    return (
      <div>
        <h3> Title: </h3>
        <input onChange={ (e) => this.handleChange('title', e)} type="text" value={ title }/>
        <h3> Description: </h3>
        <input onChange={ (e) => this.handleChange('description', e)} type="text" value={ description }/>
        <div>
          <button onClick={ this.saveChanges }> Save </button>
          <button onClick={ this.cancelChanges }> Cancel </button>
        </div>

      </div>
    )
  }
}

export default EditTask;
