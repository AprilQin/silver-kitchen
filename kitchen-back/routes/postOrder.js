var express = require("express");
var router = express.Router();

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

/* GET users listing. */
router.post("/", function (req, res, next) {
  let msg = "";
  for (const item of req.body) {
    msg += "\n " + item.name + " , " + item.count + ".";
  }

  client.messages
    .create({
      body: msg,
      from: "+12244343630",
      to: "+16045120224",
    })
    .then(res.send("you have made an order"));
});

module.exports = router;
