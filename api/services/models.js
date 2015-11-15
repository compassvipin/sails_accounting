var db = require("./db.js");
var Sequelize = require('sequelize');
var sequelize = new Sequelize(db.dbPath());

module.exports = {
    // Images: require("../models/Images.js")(sequelize, Sequelize),
    User: require("../models/User.js")(sequelize, Sequelize),
    AccessToken: require("../models/UserRoles.js")(sequelize, Sequelize),
   
    sequelize: sequelize
}
