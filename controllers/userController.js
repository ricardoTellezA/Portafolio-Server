const User = require("../models/User");
const Project = require("../models/Projects");
const createToken = require("../assets/Token");
const bcrypt = require("bcrypt");

async function createUser(input) {
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

async function loginUser(input) {
  const { email, password } = input;
  const user = await User.findOne({ email });

  if (!user) throw new Error("El usuario no existe");

  const correctPassword = await bcrypt.compare(password, user.password);

  if (!correctPassword) throw new Error("La contraseña es incorrecta");

  return {
    token: createToken(user, process.env.SECRET_KEY),
  };
}

async function editUser(input) {
  const {
    username,
    name,
    presentation,
    description,
    skills,
    image,
    profession,
  } = input;
  const user = await User.findOne({ username });

  if (!user) throw new Error("El usuario no existe");

  const dataUser = {
    name,
    presentation,
    description,
    skills,
    image,
    profession,
  };

  const newUser = await User.findOneAndUpdate(
    { username }, // consulta para encontrar el documento
    {
      // objeto de actualización con los nuevos valores
      $set: {
        name: dataUser.name,
        presentation: dataUser.presentation,
        description: dataUser.description,
        skills: dataUser.skills,
        image: dataUser.image,
        profession: dataUser.profession,
      },
    },
    { upsert: true, runValidators: true } // opción upsert para crear el documento si no existe
  );

  Object.keys(dataUser).forEach((key) => {
    if (dataUser[key]) delete dataUser[key];
  });

  await User.findOneAndUpdate(
    { username },
    {
      $unset: dataUser,
    }
  );

  newUser.save();

  return newUser;
}

async function obtenerUsuario(username) {
  const user = await User.findOne({ username });
  const projects = await Project.find({ username }).sort({ createdAt: -1 });
  user.projects = projects;

  if (!user) throw new Error("El usuario no existe");
  return user;
}

module.exports = {
  createUser,
  loginUser,
  editUser,
  obtenerUsuario,
};
