import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

/**
 * @description Función que devuelve un JWS Token
 * @param {string} user
 * @returns {string} token
 */
export function createToken(user) {
    const tokenPayload = {
        userName: user.userName,
        id: user._id,
    };
    const secret = process.env.SECRET;
    return jwt.sign(tokenPayload, secret);
}

/**
 *
 * @param {string} token
 * @returns
 */
export function verifyToken(token) {
    const secret = process.env.SECRET;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return error.message;
    }
}
