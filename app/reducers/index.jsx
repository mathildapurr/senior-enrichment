import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';

import selectedCampus from './selectedCampus';

const rootReducer = combineReducers({
  selectedCampus,
  campuses,
  students,
});

export default rootReducer;
// export action creators
export * from './campuses';
export * from './students';
export * from './selectedCampus';

