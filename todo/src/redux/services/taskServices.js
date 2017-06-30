import axios from 'axios';

import store from './../store';
import { getTasks, updateTask, deleteTask, createTask } from './../actions/taskActions';

const port = 3005;
const apiURL =  `http://localhost:${port}/tasks/`;

export function dispatchGetTasks() {
  const promise = axios.get(apiURL).then(response => response.data);
  store.dispatch(getTasks(promise));
}

export function dispatchCreateTask(obj) {
  const promise = axios.post(apiURL, obj).then(response => {
    dispatchGetTasks();
  });
  store.dispatch(createTask(promise));
}

export function dispatchUpdateTask(id, obj) {
  const promise = axios.patch(apiURL + id, obj).then(response => {
    dispatchGetTasks();
    return response.data
  });
  store.dispatch(updateTask(promise));
}

export function dispatchDeleteTask(id) {
  const promise = axios.delete(apiURL + id).then(response => {
    dispatchGetTasks();
  });
  store.dispatch(deleteTask(promise));
}
