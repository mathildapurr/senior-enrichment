//update the current selected STUDENT to enable editing

const SELECTED_STUDENT = 'SELECTED_STUDENT';

export function selectedStudent(student){
  const action = { type: SELECTED_STUDENT, student};
  return action.student;
}

//THUNK
// export function getSelectedSTUDENT(STUDENTId){
//   return function thunk (dispatch) {
//     return axios.get(`/api/STUDENTes/${STUDENTId}`)
//       .then(res => res.data)
//       .then(STUDENT => dispatch(selectedSTUDENT(STUDENT)));
//   };
// }

export default function reducer (student = {}, action) {
  switch (action.type) {
    case SELECTED_STUDENT:
      return action.student;
    default:
      return student;
  }
}
