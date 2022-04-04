import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import User from '../models/user.model.js';

dotenv.config();

export async function mongoConnect() {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const dbName =
        process.env.NODE_ENV === 'test'
            ? process.env.TEST_DB_NAME
            : process.env.DB_NAME;
    console.log('Connecting to', dbName);
    const uri = `mongodb+srv://${user}:${password}@mycluster.xic6d.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    return await mongoose.connect(uri);
}

export async function mongoDisconnect() {
    return mongoose.disconnect();
}
