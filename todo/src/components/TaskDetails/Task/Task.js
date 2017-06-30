import React from 'react';

const Task = props => {
  const{ task } = props;
  return (
    <div>
      <h2> { task.title } </h2>
      <h4>Description:</h4>
      <p> { task.description } </p>
    </div>
  )
}
export default Task;
