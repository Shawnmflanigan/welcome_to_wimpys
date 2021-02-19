// dependancies/imports
const express = require('express');
const router = express.Router();
const orm = require('../config/orm');
const burger = require('../models/burger.js');

// router set up

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.create(
      req.body, function() {
      res.redirect("/");
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    orm.updateOne('burgers', {devoured: true}, `id = ${req.params.id}`, function(){
      res.redirect("/")

    });
  // router.put("/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   orm.updateOne({
  //     devoured: 1
  //   }, {id: req.params.id}, function() {
  //     res.redirect("/");
  //   });
  // router.put("/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   console.log("condition", condition);
  
  //   orm.updateOne({
  //     devoured: req.body.devoured
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  });








  // Export routes for server.js to use.
module.exports = router;