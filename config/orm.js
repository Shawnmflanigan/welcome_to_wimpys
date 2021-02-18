// Dependancies

const connection = require("./connection.js");

// ORM/ mysql methods
const orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput}`;
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
        })
    },

    insertOne: function(tableInput, dbObject, cb) {
        var queryString = `INSERT INTO ${tableInput} SET ?`;
        connection.query(queryString, dbObject, function(err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
            })
    },

    updateOne: function(tableInput, dbObject, cb) {
        var queryString = `UPDATE ${tableInput} ?`;
        connection.query(queryString, dbObject, function(err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);
            })
    },    
    };

// export

module.exports = orm;
