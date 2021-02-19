// import/dependancies
const orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    
    update: function(objColVals, condition, cb) {
      var cond = "id=" +condition
           orm.updateOne("burgers", objColVals, cond, function(res) {
             cb(res);
           });
          }
        }
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
  