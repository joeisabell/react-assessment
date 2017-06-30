import React, { Component } from 'react';

import { dispatchCreateTask } from './../../../redux/services/taskServices';
import './CreateTask.css';

class CreateTask extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.create = this.create.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    })
  }

  create() {
    if(this.state.userInput) {
      dispatchCreateTask({
        title: this.state.userInput,
        complete: false,
        description: ''
      })
      this.setState({
        userInput: ''
      })
    }
  }

  render() {
    const{ userInput } = this.state
    return (
      <div className="CreateTask__container">
        <input className="CreateTask__input" type='text' onChange={ this.handleChange } value={ userInput } />
        <button onClick={ this.create }> Add </button>
      </div>
    )
  }
}

export default CreateTask;
