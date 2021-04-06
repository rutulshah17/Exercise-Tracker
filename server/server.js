import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import exerciseRouter from './routes/exercises.js';
import userRouter from './routes/users.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//endpoint starts with exercises
app.use('/exercises', exerciseRouter);
//endpoint starts with users
app.use('/users', userRouter);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGODB_ATLAS_URI;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () =>  app.listen(PORT, () => console.log(`Server running on port: ${PORT}, MongoDB connection established`) ))
    .catch( (error) => console.log(error.message) );