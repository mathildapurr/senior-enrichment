'use strict';
/*
user model: a user can register, log in. Must have username, email and password. Otherwise redirect to error page
Grumpy cat?
*/
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      isEmail: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
});
