'use strict'
//shows all students by default
const Models = require('../../../db/models');
//const Campus = Models.Campus;
const Student = Models.Student;
const studentRouter = require('express').Router();

//All students
studentRouter.get('/', function(req, res, next){
  Student.findAll({})
  .then(students => res.json(students))
  .catch(next);
});

//POST add a new student, return that new student
//need campusid here because we fill in that info in ajax request body
studentRouter.post('/', function(req, res, next){
  Student.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email,
      campusId: req.body.campusId
    }
  })
  .then(newStudent => {
    console.log('newstudent after post request: ', newStudent);
    res.json(newStudent);
  })
  .catch(next);
});

//get a student by id
studentRouter.get('/:studentId', function(req, res, next){
  Student.findById(req.params.students)
  .then(student => res.json(student))
  .catch(next);
});

//PUT updated student info for one student
studentRouter.put('/:studentId', function(req, res, next){
  Student.findById(req.params.students)
  .then(function(student){
    student.update({
      name: req.body.name && student.name,
      email: req.body.email && student.email
    });
  })
  .then(updatedStudent => res.json(updatedStudent))
  .catch(next);
});

studentRouter.delete('/:studentId', function(req, res, next){
  Student.findById(req.params.students)
  .then(student => student.destroy())
  .then(res.send('Destroyed!'))
  .catch(next);
});

module.exports = studentRouter;
