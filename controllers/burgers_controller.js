// dependancies/imports
const express = require('express');
const router = express.Router();

const burger = require('../models/burger.js')

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
    burger.update({
      devoured: true
    }, {id: req.params.id}, function() {
      res.redirect("/");
    });
  });







  // Export routes for server.js to use.
module.exports = router;