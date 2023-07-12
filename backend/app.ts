import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import { ConnectOptions } from 'mongoose';

import routes from './routes/main';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI as string, { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
} as ConnectOptions )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());
app.use(express.json());

app.use('/app', routes);

export default app;
//this is called MVC, but no V since we are Client Side Rendering not Server Side Rendering