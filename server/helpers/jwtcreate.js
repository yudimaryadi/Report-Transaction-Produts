const jwt = require("jsonwebtoken");

function sign(user) {
  return jwt.sign({ user }, "sangatamatrahasia");
}

function decode(tokenSign) {
  return jwt.verify(tokenSign, "sangatamatrahasia");
}

module.exports = {
  sign,
  decode,
};
