import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import tasks from './reducers/taskReducer'

export default createStore(
  tasks,
  undefined,
  applyMiddleware( promiseMiddleware() )
)
