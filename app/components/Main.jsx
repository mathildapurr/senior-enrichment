import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import AllCampus from './AllCampus';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import EditCampus from './EditCampus';
import store from '../store';
import { fetchCampuses, fetchStudents } from '../reducers';

export default class Main extends Component {
  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render () {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/new-student" component={NewStudent} />
            <Route exact path="/new-campus" component={NewCampus} />
            <Route exact path="/edit-campus" component={EditCampus} />
            <Route exact path="/edit-student" component={EditStudent} />
            <Route exact path="/campuses" component={AllCampus} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Redirect to="/campuses" />
          </Switch>
        </main>
      </div>
    );
  }
}

