import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postCampus } from '../reducers';

function NewCampus(props){
  //const dummyCampus = {name: 'name', description: 'description', image: 'imageURL'}
  const { handleSubmit } = props;

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label className="col-sm-2 control-label">Campus Name</label>
      <div className= "col-sm-10">
        <input type="text" className="form-control" placeholder="Campus" aria-describedby="basic-addon1" name="campusName"/>
      </div>
      <label className="col-sm-2 control-label">Description</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" placeholder="best campus in the universe" aria-describedby="basic-addon1" name="description"/>
      </div>
      <label className="col-sm-2 control-label">Campus</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" placeholder="http://campusimage.com" aria-describedby="basic-addon2" name="image" />
      </div>
      <div className="form-group col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>
    </div>
  );
}
const mapStateToProps = null;
// const mapStateToProps = function (state) {
//   console.log(state.campuses);
//   //let dummyCampus = {name: '', description: '', image: ''};
//   return {
//     campuses: state.campuses
//   };
// };

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // handleChange(evt) {
    //   const targetName = evt.target.name;

    //   switch (targetName){
    //     case 'name':
    //       return evt.target.campusName.value || '';
    //       //evt.target.name.value = campusName;
    //     case 'description':
    //       return evt.target.description.value || '';
    //     case 'image':
    //       return evt.target.image.value || '';
    //   }
    //   //dispatch(getCampus({campusName, description, image}));
    // },
    handleSubmit (evt) {
      evt.preventDefault();
      let campus = {
        name: evt.target.campusName.value,
        description: evt.target.description.value,
        image: evt.target.image.value
      };
      console.log('Campus before dispatching', campus);
      dispatch(postCampus(campus, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCampus);
