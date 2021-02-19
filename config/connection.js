// Dependancies
const mysql = require('mysql');
const connection;

// mySql connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "B00tC@mp",
    database: "burgers_db"
  });
}
// Connect to the DB
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});


// Export module
connection.connect();
module.exports = connection;