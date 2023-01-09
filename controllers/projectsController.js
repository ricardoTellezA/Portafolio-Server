const Project = require("../models/Projects");
const User = require("../models/User");

async function addProject(input) {
  const user = await User.findOne({ username: input.username });
  if (!user) throw new Error("El usuario no existe");

  const newProyect = new Project({
    username: input.username,
    name: input.name,
    description: input.description,
    image: input.image,
    url: input.url,
    technologies: input.technologies,
    createdAt: new Date(),
  });
 await newProyect.save();

  return newProyect;
}

module.exports = {
  addProject,
};
