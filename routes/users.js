var express = require("express");
var router = express.Router();

/* Post users listing. */
router.get("/", function (req, res, next) {
  res.send({
    name: "John Smith",
    age: 32,
    email: "john.smith@gmail.com",
    interests: ["hiking", "reading", "traveling"],
  });
});

module.exports = router;
