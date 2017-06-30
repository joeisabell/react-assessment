import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import TaskSummary from './TaskSummary/TaskSummary';
import TaskDetails from './TaskDetails/TaskDetails';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={ TaskSummary } />
          <Route path='/task/:id' component={ TaskDetails } />
        </Switch>
      </div>
    );
  }
}

export default App;
