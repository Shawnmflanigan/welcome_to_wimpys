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
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // router.post("/api/burgers", function(req, res) {
  //   burgers.create([
  //     "name", "sleepy"
  //   ], [
  //     req.body.name, req.body.sleepy
  //   ], function(result) {
  //     // Send back the ID of the new quote
  //     res.json({ id: result.insertId });
  //   });
  // });







  // Export routes for server.js to use.
module.exports = router;