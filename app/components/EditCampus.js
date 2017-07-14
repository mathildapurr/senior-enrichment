import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { putCampus } from '../reducers';
//import SingleCampus from './SingleCampus';

function EditCampus(props){
  //const dummyCampus = {name: 'name', description: 'description', image: 'imageURL'}
  const { selectedCampus, onClickSubmit } = props;

  return (
    <div className="container">
    <form onSubmit={onClickSubmit}>
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

class EditCampusLoader extends Component {
  onClickEvent(evt){
    const campus = this.props.selectedCampus;
    console.log('selected campus', campus);
    evt.preventDefault();
    this.props.handleSubmit(evt, campus);
  }
  render () {
    return (
      <EditCampus {...this.props} />
    );
  }
}

const mapStateToProps = function(state, ownProps){
  return {
    selectedCampus: state.selectedCampus
  }
}


// const mapStateToProps = function (state) {
//   console.log(state.campuses);
//   //let dummyCampus = {name: '', description: '', image: ''};
//   return {
//     campuses: state.campuses
//   };
// };

const mapDispatchToProps = function (dispatch, ownProps) {
  return {

    handleSubmit (evt, campus) {
      evt.preventDefault();
      let updatedCampus = {
        id: campus.id,
        name: evt.target.campusName.value,
        description: evt.target.description.value,
        image: evt.target.image.value
      };
      console.log('Campus before dispatching', updatedCampus);
      dispatch(putCampus(updatedCampus, ownProps.history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCampusLoader);
