const mysql = require("mysql");

require("dotenv").config();
const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "admin",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

con.connect(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

// const query = async (str) => {
//   console.log("query received");
//   var res = [];
//   await con.query(str, function (error, results, fields) {
//     if (error) {
//       console.log("query error");
//     } else {
//       console.log("query result: ", results);
//       res = results;
//     }
//   });
//   return res;
// };

const close = () => con.end();

module.exports = { con, close };
