const jwt = require("jsonwebtoken");

function createToken(user, secret) {
  const { id, email, name } = user;

  return jwt.sign({ id, email, name }, secret, { expiresIn });
}

module.exports = createToken;
