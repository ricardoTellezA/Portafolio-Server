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

  description: {
    type: String,
    trim: true,
  },

  skills: {
    type: [String],
    trim: true,
    url: {
      type: String,
      
    },


  
  },

  

  image: {
    type: String,
    trim: true,
  },
  presentation: {
    type: String,
    trim: true,
  },

  profession: {
    type: String,
    trim: true,
  },
});

module.exports = moongose.model("User", UserSchema);
