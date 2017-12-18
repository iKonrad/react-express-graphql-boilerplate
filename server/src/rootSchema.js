import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLNonNull } from 'graphql';
import _ from 'lodash';
import mongoose from 'mongoose';
import UserType from './libs/user/graphql/userType';
import mutations from './mutations';

const User = mongoose.model('user');

const users = [
  {
    id: '23', firstName: 'Konrad', lastName: 'Jarosinski', dob: '1990-09-21',
  },
  {
    id: '24', firstName: 'Hannah', lastName: 'Jarosinska', dob: '2014-05-12',
  },
];

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, { id }) {
        return User.findById(id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});
