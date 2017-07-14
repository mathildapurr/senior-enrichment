//returns an array of campuses
import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// ACTION CREATORS
export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function updateCampus (campus) {
  const action = { type: UPDATE_CAMPUS, campus };
  return action;
}

export function createCampus (campus) {
  const action = { type: CREATE_CAMPUS, campus };
  return action;
}

export function deleteCampus (campusId) {
  const action = { type: DELETE_CAMPUS, campusId };
  return action;
}

// THUNK CREATORS -- MIDDLEWARE THAT DISPATCHES ACTIONS
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
//updating an existing campus
export function putCampus (campus, history) {
  return function thunk (dispatch) {
    return axios.put(`/api/campuses/${campus.id}`)
      .then(res => res.data)
      .then(editedCampus => {
        console.log('updated campus from ajax call in updateCampus', editedCampus);
        dispatch(updateCampus(editedCampus));//updates store.state.campus
        history.push(`/campuses/${editedCampus.id}`);
      });
  };
}

export function postCampus (campus, history) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = createCampus(newCampus[0]);
        console.log('new campus from ajax call in postcampus thunk', newCampus);
        dispatch(action);
        history.push(`/campuses/${newCampus[0].id}`);
      });
  };
}
export function removeCampus (campusId) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .then(dispatch(deleteCampus(campusId)));
  };
}

//REDUCER
export default function reducer (campuses = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case CREATE_CAMPUS:
      return [action.campus, ...campuses];

    case UPDATE_CAMPUS:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    case DELETE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.campusId);

    default:
      return campuses;
  }
}
