'use strict';
/*
Campuses
have info such as a name and image
+description
can have many students assigned (may have none)
*/
var Sequelize = require('sequelize');
var db = require('../index');

module.exports = db.define('campus', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
});

