const {createUser} = require('../controllers/userController');

const resolvers = {
    Query: {},

    Mutation: {
        createUser: async (_, {input}) => createUser(input)
    }    
};


module.exports = resolvers;