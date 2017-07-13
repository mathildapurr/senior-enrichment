'use strict';
/*
user model: a user can register, log in. Must have username, email and password. Otherwise redirect to error page
Grumpy cat?
*/
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('student', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING
    }
});
