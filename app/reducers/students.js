import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_NEW_STUDENT = 'GET_NEW_STUDENT';

//Action creaters
export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getNewStudent(newStudent) {
  const action = { type: GET_NEW_STUDENT, newStudent};
  return action;
}

// THUNK CREATORS
export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

//REDUCER
export default function reducer (state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_NEW_STUDENT:
      return [...state, action.newStudent];
    default:
      return state;
  }
}
