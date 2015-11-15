/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = function (sequelize, Sequelize) {

// var user_roles = require('./UserRoles.js')(sequelize, Sequelize);
    var User = sequelize.define('User', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        emp_id: {
            type: Sequelize.STRING,
            require: true,
            unique: true
        },
        first_name: {
            type: Sequelize.STRING,
            require: true
        },
        last_name: {
            type: Sequelize.STRING,
            require: true
        },
        email: {
            type: Sequelize.STRING,
            require: true
        },
        password: {
            type: Sequelize.STRING,
            require: true
        },
        city: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        role_type: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.BOOLEAN,
            default:false
        }
    },{
  tableName: 'user', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}); 
 
    return (User);
}
