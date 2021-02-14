// Dependancies
const mysql = require('mysql');

// mySql connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "B00tC@mp",
    database: "burgers_db"
});

// Connect to the DB
connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    console.log(`connected as id ${connection.threadId}`);
});
    

// Export module
module.exports = connection;