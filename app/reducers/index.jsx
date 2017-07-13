import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import newStudent from './newStudent';

const rootReducer = combineReducers({
  campuses,
  students,
  newStudent
});

export default rootReducer;
// export action creators
export * from './campuses';
export * from './students';
export * from './newStudent';
