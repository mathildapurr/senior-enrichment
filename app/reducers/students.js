import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

//Action creaters
export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function updateStudent (student) {
  const action = { type: UPDATE_STUDENT, student };
  return action;
}

export function createStudent (student) {
  const action = { type: CREATE_STUDENT, student };
  return action;
}

export function deleteStudent (studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

// THUNK CREATORS
//these functions pass the return value to action creaters, creates a new action, whicn we can then dispatch to the store, which update the store state by calling reducers we defined, which returns our new action values
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

export function putStudent (studentId, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/Studentes/${studentId}`)
      .then(res => res.data)
      .then(editedStudent => {
        console.log('updated Student from ajax call in updateStudent', editedStudent);
        dispatch(updateStudent(editedStudent));//updates store.state.Student
        history.push(`/Studentes/${editedStudent.id}`);
      });
  };
}
export function postStudent (student, history) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(createStudent(newStudent));
        console.log('newly created student from postStudent ajax call: ', newStudent[0]);
        //why is newStudent an array?????????
        history.push(`/students/${newStudent[0].id}`);
      });
  };
}

export function removeStudent (studentId) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(dispatch(deleteStudent(studentId)));
  };
}

//REDUCER
export default function reducer (students = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case CREATE_STUDENT:
      return [action.student, ...students];

    case UPDATE_STUDENT:
    //returns a new array of students with the updated student
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    case DELETE_STUDENT:
      return students.filter(student => student.id !== action.studentId);

    default:
      return students;
  }
}
