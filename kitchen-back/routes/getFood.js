const db = require("../db");
const express = require("express");

const router = express.Router();

/* GET users listing. */
router.get(`/`, function (req, res, next) {
  // front end is sending url with query string
  console.log("request is ", req.query.category);

  // retrieve table of category from db
  // db.query(`select * from test1`);

  db.con.query(
    `select * from ${req.query.category}`,
    function (error, results, fields) {
      if (error) {
        console.log("query error");
        res.send([]);
      } else {
        console.log("query result: ", results);
        res.send(results);
      }
    }
  );

  db.close();

  // res.send(["chicken", "beef", "lamb shoulder", "noodle", "tofu", "sausage"]);
});

module.exports = router;
