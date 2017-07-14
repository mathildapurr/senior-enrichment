//update the current selected campus to enable editing

const SELECTED_CAMPUS = 'SELECTED_CAMPUS';

export function selectedCampus(campus){
  const action = { type: SELECTED_CAMPUS, campus };
  return action.campus;
}

//THUNK
// export function getSelectedCampus(campusId){
//   return function thunk (dispatch) {
//     return axios.get(`/api/campuses/${campusId}`)
//       .then(res => res.data)
//       .then(campus => dispatch(selectedCampus(campus)));
//   };
// }

export default function reducer (campus = {}, action) {
  switch (action.type) {
    case SELECTED_CAMPUS:
      return action.campus;
    default:
      return campus;
  }
}
