//displays a single profile of campus or student
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Profile(props) {
  return (
    <div className="container">
    {
      campuses.filter(campus => campus.id === campusId)
      .map(campus => (
        <div>
          <h3>{ campus.name }</h3>
          <img src={ campus.image} className="img-thumbnail"></img>
          <p className="text-muted">{campus.description}</p>
        </div>)
      )
    }
    </div>
  )
}

class ProfileLoader extends Component{
  componentWillReceiveProps (nextProps) {
    if (nextProps.campus.id !== this.props.campus.id) {
      this.props.campus = nextProps.campus;
    }
  }
  render () {
    return (
      <Profile {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  const studentId = Number(ownProps.match.params.studentId);
  return {
    campuses: state.campuses,
    students: state.students,
    campusId,
    studentId
  };
};

export default withRouter(connect(mapStateToProps, null)(Profile));
