import { GET_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from './../actions/taskActions';

const initialState = {
  loading: false,
  taskList: []
}

export default function( state=initialState , action ) {
  switch (action.type) {
    case GET_TASKS + '_PENDING':
      return {
        loading: true,
        taskList: []
      }
    case GET_TASKS + '_FULFILLED':
      return {
        loading: false,
        taskList: action.payload
      }
    case CREATE_TASK + '_FULFILLED':
      return { ...state }
    case UPDATE_TASK + '_FULFILLED':
      return { ...state }
    case DELETE_TASK + '_FULFILLED':
      return { ...state }
    default: return state;
  }
}
