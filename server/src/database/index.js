import mongoose from 'mongoose';
import { DB_SERVER, DB_PORT } from 'config/server';
import './registerSchemas';

const databaseConnection = mongoose.connection;

mongoose.Promise = global.Promise;
mongoose.connect(`${DB_SERVER}:${DB_PORT}`);

databaseConnection
  .once('open', () => console.log('Connected to MongoDB database'))
  .on('error', error => console.log('Error connecting to the MongoDB: ', error));


export default databaseConnection;
