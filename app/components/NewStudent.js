import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postStudent } from '../reducers';

function NewStudent(props){

  const { handleSubmit } = props;

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label className="col-sm-2 control-label">Name</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" placeholder="student" aria-describedby="basic-addon1" name="studentName"/>
      </div>
      <label className="col-sm-2 control-label">Email</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" placeholder="student@gmail.com" aria-describedby="basic-addon1" name="email"/>
      </div>
      <label className="col-sm-2 control-label">Campus</label>
      <div className=" col-sm-10">
        <input type="number" className="form-control" placeholder="1" aria-describedby="basic-addon2" name="campusId" />
      </div>
      <div className="form-group col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>
    </div>
  )
}

const mapStateToProps = null;

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    //not sure why need handle change, is it to update state?
    // handleChange(evt) {
    //   const name = evt.target.name;
    //   let studentName, email, campusId;
    //   switch (name){
    //     case 'studentName':
    //       studentName = evt.target.studentName.value || '';
    //     case 'email':
    //       email = evt.target.email.value || '';
    //     case 'campusId':
    //       campusId = evt.target.campusId.value || 0;
    //   }
    //   dispatch(getStudent({studentName, email, campusId}));
    // },
    handleSubmit (evt) {
      evt.preventDefault();
      let student = {
        name: evt.target.studentName.value,
        email: evt.target.email.value,
        campusId: evt.target.campusId.value
      };
      console.log('student before dispatching', student);
      dispatch(postStudent(student, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStudent);
