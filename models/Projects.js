const moongose = require("mongoose");
const Schema = moongose.Schema;

const ProjectSchema = Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },

  description: {
    type: String,
    trim: true,
    required: true,
  },

  image: {
    type: String,
    trim: true,
    required: true,
  },

  url: {
    type: String,
    trim: true,
    required: true,
  },

  technologies: {
    type: [String],
    trim: true,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = moongose.model("Project", ProjectSchema);
