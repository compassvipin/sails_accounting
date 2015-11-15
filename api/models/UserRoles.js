module.exports = function (sequelize, Sequelize) {
    var User = require('./User.js')(sequelize, Sequelize);
    var user_role = sequelize.define('user_role', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role_name: {
            type: Sequelize.STRING,
            require: true,
            unique: true
        }

    },{
  tableName: 'user_role', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}); 
    sequelize.sync();
    return (user_role);
}
