//renders either all campuses or all students
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function All (props){
  const elements = props.path === '/campuses' ? props.campuses : props.students;

  return (
    <div className="container">
        <div className="row">
        {
          elements.map(el =>
          (<div key = {el.id} className="col-sm-6 col-md-4">
            <NavLink to={`${props.path}/${el.id}`} className="thumbnail">
            <img className="img-responsive" src={el.image}></img></NavLink>
            <h4>{el.name}</h4>
          </div>)
          )}
        </div>
      </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  return {
    campuses: state.campuses,
    students: state.students,
    path: ownProps.match.url //matched portion of url
  };
};

export default withRouter(connect(mapStateToProps)(All));
