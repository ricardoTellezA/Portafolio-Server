const moongose = require("mongoose");
const Schema = moongose.Schema;

const UserSchema = Schema({
  username: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = moongose.model("User", UserSchema);
