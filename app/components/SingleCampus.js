import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectedCampus, deleteCampus } from '../reducers';

//renders the selected campus using info: campus, students
function SingleCampus (props) {

  console.log('single campus component received props: ', props);

  const { campus, students, onClickEvent} = props;

  return (
      <div className="container">
        <div>
          <h3>{ campus.name }</h3>
          <img src={ campus.image } className="img-thumbnail" />
          <p className="text-muted">{campus.description}</p>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Students</div>
          <table className='table'>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
            students && students.map(student => (
              <tr key={student.id}>
                <td><NavLink to={`/students/${student.id}`}>{ student.name }</NavLink></td>
                <td>{student.email}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <NavLink to={`edit-campus`}><button onClick = {onClickEvent} type="button" className="btn-btn-warning" name="edit">Edit</button></NavLink>
        <button onClick = {onClickEvent} type="button" className="btn-btn-danger" name="delete">Delete</button>
      </div>
    </div>);
}

class SingleCampusLoader extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.campus.id !== this.props.campus.id){
      this.props.campus = nextProps.campus;
    }
  }
  onClickEvent(evt){
    const campus = this.props.campus;
    console.log('onclick campus is ', campus);
    evt.preventDefault();
    this.props.handleClick(evt, campus);
  }
  render () {
    return (
      <SingleCampus {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  console.log(state);
  return {
    campus: state.campuses.find(campus => campus.id === campusId),
    students: state.students.filter(student => student.campusId === campusId)
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  //const campusId = Number(ownProps.match.params.campusId);
  return {
    handleClick (evt, campus) {
      evt.preventDefault();
      console.log('button clicked');
      evt.target.name === 'edit' ? dispatch(selectedCampus(campus)) : dispatch(deleteCampus(campus.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampusLoader);

