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
    }
}; 

// insertOne ();

// updateOne ();

// export

module.exports = orm;
