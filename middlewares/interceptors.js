import { verifyToken } from '../services/auth.js';
import User from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config();

export const loginRequired = (req, res, next) => {
    const authorization = req.get('authorization');
    let token;
    const tokenError = new Error('Missing o invalid token');
    token.status = 401;
    let decodedToken;
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
        decodedToken = verifyToken(token);
        if (typeof decodedToken === 'string') {
            next(tokenError);
        } else {
            req.tokenPayload = decodedToken;
            next();
        }
    } else {
        next(tokenError);
    }
};

export const userRequired = async (req, res, next) => {
    const userId = req.params.id;
};
