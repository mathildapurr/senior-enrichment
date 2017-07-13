import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
//const EDIT_CAMPUS = 'EDIT_CAMPUS';

// ACTION CREATORS
export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

// THUNK CREATORS
//updating an existing campus
export function updateCampus (campusId, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(editedCampus => {
        const action = getCampuses();
        console.log('updated campus from ajax call', editedCampus);
        dispatch(action);
        history.push(`/campuses/${editedCampus[0].id}`);
      });
  };
}

export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function deleteCampus (campusId) {
  return function thunk () {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(fetchCampuses());
  };
}

export function postCampus (campus, history) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampus(newCampus[0]);
        console.log('new campus from ajax call', newCampus[0]);
        dispatch(action);
        history.push(`/campuses/${newCampus[0].id}`);
      });
  };
}

//REDUCER
//adding a new campus changes the store state
export default function reducer (state = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case GET_CAMPUS:
      return [...state, action.campus];

    default:
      return state;
  }
}
