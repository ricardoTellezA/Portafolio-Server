const jwt = require("jsonwebtoken");

function createToken(user, secret) {
  const { id, email, name, username } = user;

  return jwt.sign({ id, email, name, username }, secret);
}

module.exports = createToken;
