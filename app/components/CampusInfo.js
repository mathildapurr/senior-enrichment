//just displays campuses/campus
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCampus, postCampus } from '../reducers';

function CampusInfo(props){
  const {campuses, campusId} = props;
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

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    campuses: state.campuses
    students: state.students.filter(student => student.campusId === campusId),
    editCampus: state.editCampus,
    campusId
  };
};
