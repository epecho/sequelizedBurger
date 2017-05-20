// // Set up MySQL connection.
// var mysql = require("mysql");
// var connection;
//
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSBB_URL);
//   }else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Mota1234",
//     database: "burgers_db"
//   });
//
// };




// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSBB_URL);
  }else {
  connection = mysql.createConnection({
    host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "fdl9oinqv9nblq0y",
    password: "hzmmd02n2vi9pnrb",
    database: "qx9dnksnlkrjgy2h"
  });

};





// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
