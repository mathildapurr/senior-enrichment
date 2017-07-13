import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCampus, postCampus } from '../reducers';

function CampusInfo(){

}
<div>
          <h3>{ campus.name }</h3>
          <img src={ campus.image } className="img-thumbnail" />
          <p className="text-muted">{campus.description}</p>
        </div>
