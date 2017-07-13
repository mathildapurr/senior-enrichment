'use strict'
//shows all campuses by default
const Models = require('../../../db/models');
const Campus = Models.Campus;
//const Student = Models.Student;
const campusRouter = require('express').Router();

//get all campuses
campusRouter.get('/', function(req, res, next){
  Campus.findAll({})
  .then(campuses => res.json(campuses))
  .catch(next);
});

//POST route: add new campus
campusRouter.post('/', function(req, res, next){
  Campus.findOrCreate({
    where: {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image
    }
  })
  .then(newCampus => res.json(newCampus))
  .catch(next);
});

//get a campus by id
campusRouter.get('/:campusId', function(req, res, next){
  Campus.findById(req.params.campuses)
  .then(campus => res.json(campus))
  .catch(next);
});

//PUT routes: update campus info for one campus. Keep the original field if a certain field is empty
campusRouter.put('/:campusId', function(req, res, next){
  Campus.findById(req.params.campuses)
  .then(function(campus){
    campus.update({
      name: req.body.name && campus.name,
      image: req.body.image && campus.image,
      description: req.body.description && campus.description
    });
  })
  .then(updatedCampus => res.json(updatedCampus))
  .catch(next);
});

campusRouter.delete('/:campusId', function(req, res, next){
  Campus.findById(req.params.campuses)
  .then(campus => campus.destroy())
  .then(res.send('Destroyed!'))
  .catch(next);
});

module.exports = campusRouter;
