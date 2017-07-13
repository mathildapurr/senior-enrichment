//determines which campus is edited
const EDIT_CAMPUS = 'EDIT_CAMPUS';

export function editCampus (campus) {
  const action = {type: EDIT_CAMPUS, campus}
  return action;
}

//REDUCER
//has to have a new state otherwise won't render
export default function reducer (state = {}, action) {
  switch (action.type) {

    case EDIT_CAMPUS:
      return action.campus;

    default:
      return state;
  }
}
