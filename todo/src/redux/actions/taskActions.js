export const GET_TASKS = 'GET_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function getTasks(promise) {
  return {
    type: GET_TASKS,
    payload: promise
  }
}

export function createTask(promise) {
  return {
    type: CREATE_TASK,
    payload: promise
  }
}

export function updateTask(promise) {
  return {
    type: UPDATE_TASK,
    payload: promise
  }
}

export function deleteTask(promise) {
  return {
    type: DELETE_TASK,
    payload: promise
  }
}
