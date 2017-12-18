import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import mongoose from 'mongoose';
import UserType from './libs/user/graphql/userType';

const User = mongoose.model('user');

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
        dob: {
          type: GraphQLString,
        },
        role: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, {
        firstName, lastName, email, dob, role,
      }) {
        return (new User({
          firstName, lastName, email, dob, role,
        })).save();
      },
    },
  },
});
