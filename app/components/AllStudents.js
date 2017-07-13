//all student view
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function AllStudents (props){
  const {students} = props;
  return (
    <div className="container">
        <div className="row">
        {
          students.map(student =>
          (<div key = {student.id} className="col-sm-6 col-md-4">
            <NavLink to={`/students/${student.id}`} className="thumbnail"><img className="img-responsive" src={student.image}></img></NavLink>
            <h4>{student.name}</h4>
          </div>)
          )}
          <div className="col-sm-6 col-md-4">
            <NavLink to={`/new-student`} className="thumbnail"><img className="img-responsive" height="350"></img></NavLink>
            <h4 className="text-muted">Add New Student</h4>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = function (state) {
  return {
    students: state.students,
  };
};

export default connect(mapStateToProps)(AllStudents);


