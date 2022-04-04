import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createToken } from '../services/auth.js';

export const login = async (req, res, next) => {
    const { userName, password } = req.body;
    console.log(`\nUser: ${userName}\nPassword: ${password}\n`);
    const loginError = new Error('User or password invalid');
    loginError.status = 401;

    if (!userName || !password) {
        next(loginError);
    } else {
        const userFound = await User.findOne({
            userName,
        });
        console.log(userFound);
        const compare = bcrypt.compareSync(password, userFound.password);
        console.log(compare);
        if (userFound && compare) {
            const token = createToken({
                name: userFound.userName,
                id: userFound.id,
            });
            console.log(token);
            res.json({
                token,
                user: userFound.userName,
                id: userFound._id,
            });
        } else {
            next(loginError);
        }
    }
};
