import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedStudent, deleteStudent } from '../reducers';
import { NavLink } from 'react-router-dom';

function SingleStudent (props) {
  const { student, campus, onClickEvent } = props;
  console.log(props);
  return (
      <div className="container">
        <div>
          <h3>{ student.name }</h3>
          <img src={ student.image } className="img-thumbnail" />
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">Info</div>
          <table className='table'>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Campus</th>
            </tr>
          </thead>
          <tbody>
            <tr key={student.id}>
              <td>{ student.name }</td>
              <td>{student.email}</td>
              <td> <NavLink to={`/campuses/${campus.id}`}>{campus.name}</NavLink></td>
            </tr>
          </tbody>
        </table>
        <button onClick = {onClickEvent} type="button" className="btn-btn-warning">Edit</button>
        <button onClick = {onClickEvent} type="button" className="btn-btn-danger">Delete</button>
      </div>
    </div>
  );
}

class SingleStudentLoader extends Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.student.id !== this.props.student.id) {
      this.props.student = nextProps.student;
    }
  }
  onClickEvent(evt){
    const student = this.props.student;
    evt.preventDefault();
    this.props.handleClick(evt, student);
  }
  render () {
    return (
      <SingleStudent {...this.props} />
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  console.log('student id', studentId);
  let student = state.students.find(singleStudent => singleStudent.id === studentId);
  return {
    student: state.students.find(oneStudent => oneStudent.id === studentId),
    campus: state.campuses.find(campus => student.campusId === campus.id)
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  const studentId = Number(ownProps.match.params.campusId);
  return {
    handleClick (evt, student) {
      evt.preventDefault();
      console.log('button clicked');
      evt.target.name === 'edit' ? dispatch(selectedStudent(student)) : dispatch(deleteStudent(studentId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudentLoader);

