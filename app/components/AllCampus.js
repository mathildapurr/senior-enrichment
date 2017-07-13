//all campus view
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function AllCampus (props){
  const {campuses} = props;
  return (
    <div className="container">
        <div className="row">
        {
          campuses.map(campus =>
          (<div key = {campus.id} className="col-sm-6 col-md-4">
            <NavLink to={`/campuses/${campus.id}`} className="thumbnail">
            <img className="img-responsive" src={campus.image}></img></NavLink>
            <h4>{campus.name}</h4>
          </div>)
          )}
        </div>
      </div>
  );
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
  };
};

export default withRouter(connect(mapStateToProps)(AllCampus));
