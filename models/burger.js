// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  eat: function(id, cb) {
    var condition = "id=" + id;
    orm.eat("burgers", {
      devoured: true
    }, condition, cb);
  },
  notDevoured: function(id, cb) {
    var condition = "id=" + id;
    orm.notDevoured("burgers", {
      devoured: false
    }, condition, cb);
  },



//   delete: function(condition, cb) {
//   orm.delete("burgers", condition, function(res) {
//     cb(res);
//   });
// }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
