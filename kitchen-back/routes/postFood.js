var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  res.send("you have added food");
});

module.exports = router;
