import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateCampus, deleteCampus } from '../reducers';
//renders the selected campus or a form to edit
function SingleCampus (props) {
  console.log('single campus component received props: ', props);
  const { campus, students, editCampus, handleClick } = props;
  return (
    
      //decide which component to render: editcampus or campusinfo
      Object.keys(editCampus).length === 0 ? <CampusInfo /> : <EditCampus />
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
        <button onClick = {handleClick} type="button" className="btn-btn-warning" name="edit">Edit</button>
        <button onClick = {handleClick} type="button" className="btn-btn-danger" name="delete">Delete</button>
      </div>
    </div>
      }
      );
}

class SingleCampusLoader extends Component {

  // componentDidMount () {
  //   console.log('component did mount campuses', this.props.campuses);
  //   if (!this.props.campuses.length){
  //     console.log('no length');
  //     this.props.campuses = this.props.fetchCampuses();
  //   }
  // }
  componentWillReceiveProps (nextProps) {
    if (nextProps.campus.id !== this.props.campus.id) {
      this.props.campus = nextProps.campus;
    }
  }
  render () {
    return (
      <SingleCampus {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  console.log('campusid', campusId);
  console.log('state campuses', state.campuses);
  return {
    campus: state.campuses.find(campus => campus.id === campusId),
    students: state.students.filter(student => student.campusId === campusId),
    editCampus: state.editCampus,
    campusId
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const campusId = Number(ownProps.match.params.campusId);
  return {
    handleClick (evt) {
      evt.preventDefault();
      console.log('button clicked');
      evt.target.name === 'edit' ? dispatch(updateCampus(campusId, ownProps.history)) : dispatch(deleteCampus(campusId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampusLoader);

