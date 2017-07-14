import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { fetchCampuses, fetchStudents } from './reducers';
import Main from './components/Main';
import All from './components/All';
import SingleCampus from './components/SingleCampus';
import SingleStudent from './components/SingleStudent';

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/(campuses|students)/" component={All} />
            <Redirect to="/campuses" />
          </Switch>
        </Main>
      </Router>
    );
  }
}

const mapStateToProps = null;

//we want campuses and students properties available for all routes. In order to have this property, mapdispatch returns an object that has a property that is a functioin that returns another object that fetches the data and attach it to the returned object
const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
// <Route path="/new-student" component={NewStudent} />
//             <Route exact path="/new-campus" component={NewCampus} />
//             <Route exact path="/edit-campus" component={EditCampus} />
//             <Route exact path="/edit-student" component={EditStudent} />
//             <Route exact path="/campuses" component={AllCampus} />
//             <Route exact path="/campuses/:campusId" component={SingleCampus} />
//             <Route exact path="/students" component={AllStudents} />
//             <Route exact path="/students/:studentId" component={SingleStudent} />
