import React from 'react';

import CreateTask from './CreateTask/CreateTask';
import TaskList from './TaskList/TaskList';

export default props => {
  return (
    <div>
      <CreateTask />
      <TaskList />
    </div>
  )
}
