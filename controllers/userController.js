const User = require("../models/User");
const createToken = require("../assets/Token");
const bcrypt = require("bcrypt");

async function createUser(input) {
  console.log(input);
  const { email, password, username } = input;
  const user = await User.findOne({ email });
  const findUsername = await User.findOne({ username });
  if (user) throw new Error("El usuario ya esta registrado");
  if (findUsername) throw new Error("El nombre de usuario ya esta registrado");

  try {
    const newUser = new User(input);
    newUser.password = await bcrypt.hash(password, 10);

    newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
  }

  return null;
}

module.exports = {
  createUser,
};
