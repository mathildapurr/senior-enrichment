import axios from 'axios';
import {getNewStudent} from './students';
//post student need to dispatch two actions
const GET_STUDENT = 'GET_STUDENT';
//Action creaters

export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function postStudent (student, history) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudent(newStudent[0]));
        dispatch(getNewStudent(newStudent[0]));
        console.log('newly created student from ajax call: ', newStudent[0]);
        //why is newStudent an array?????????
        history.push(`/students/${newStudent[0].id}`);
      });
  };
}

//REDUCER
export default function reducer (state = {}, action) {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    default:
      return state;
  }
}
