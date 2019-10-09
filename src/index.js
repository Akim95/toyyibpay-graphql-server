require('dotenv').config();
import { ApolloServer } from 'apollo-server';
import ToyyibPay from 'toyyibpay-js-sdk';
import typeDefs from './schema';
import resolvers from './resolvers';

const { API_URI, API_KEY } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      toyyibPayAPI: new ToyyibPay(API_URI, API_KEY),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
