const userController = require('../controllers/userController');
const projectsController = require('../controllers/projectsController');

const resolvers = {
    Query: {
        obtenerUsuario: async (_, {username}) => userController.obtenerUsuario(username),
    },

    Mutation: {
        createUser: async (_, {input}) => userController.createUser(input),
        loginUser: async (_, {input}) => userController.loginUser(input),
        editUser: async (_, {input}) => userController.editUser(input),
        addProject: async (_, {input}) => projectsController.addProject(input),
    }    
};


module.exports = resolvers;