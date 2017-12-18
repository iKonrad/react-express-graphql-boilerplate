import { GraphQLObjectType, GraphQLString } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    role: { type: GraphQLString },
    dob: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});

export default UserType;
