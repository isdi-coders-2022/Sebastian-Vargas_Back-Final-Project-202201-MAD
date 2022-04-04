import mongoose from 'mongoose';
import User from './models/user.model.js';

const casaModel = mongoose.model(
    'Casa',
    new mongoose.Schema({
        firstName: String,
        lastName: String,
        userName: String,
        password: String,
    })
);
console.log(casaModel.findOne);
