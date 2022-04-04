import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import Product from '../models/product.model.js';
import * as crud from '../services/crud.js';
import { createError } from '../services/errors.js';
// import { createError } from '../services/error.js';

export async function userRegister(req, res, next) {
    const user = req.body;
    console.log(`Esta es la propiedad firstName de la propiedad body del objeto req ${JSON.stringify(
        req.body.firstName
    )}
        **************`);

    const salt = bcrypt.genSaltSync(15);
    user.password = bcrypt.hashSync(user.password, salt);

    try {
        const newUser = await User.create(user);
        console.log(newUser);
        res.json(newUser);
    } catch (error) {
        next(error);
    }
}

export async function getUser(req, res, next) {
    crud.getUser(req.params.id, User)
        .then((resp) => {
            res.json(resp);
        })
        .catch((error) => {
            next(createError(error));
        });
}

export async function getAllUsers(req, res, next) {
    crud.getAllUsers()
        .then((resp) => {
            res.json(resp);
        })
        .catch((err) => next(createError(err)));

    /*     try {
        const resp = await crud.getAllUsers(User);
        res.json(resp);
    } catch (error) {
        next(createError);
    } */
}

export async function addProductToUser(req, res, next) {
    /*     try {
        const currentUser = await User.findById(req.t)

    } catch (error) {} */
}

/* export const addFavorites = async (req, res, next) => {
    try {
        let currentUser = await studentUser.findById(req.tokenPayload.userId);
        console.log(currentUser, 'current user back');
        const currentStudentFavorites = currentUser.favorites.map((element) =>
            element.toString()
        );

        const isInFavorites = currentStudentFavorites.some(
            (elem) => elem === req.params.id
        );

        let updatedStudentFavorites;

        if (isInFavorites) {
            updatedStudentFavorites = await studentUser.findByIdAndUpdate(
                req.tokenPayload.userId,
                {
                    $pull: { favorites: req.params.id },
                },
                { new: true }
            );
        } else {
            updatedStudentFavorites = await studentUser.findByIdAndUpdate(
                req.tokenPayload.userId,
                {
                    $addToSet: { favorites: req.params.id },
                },
                { new: true }
            );
        }

        res.status(200).json(updatedStudentFavorites);
    } catch (err) {
        next(err);
    }
}; */

/* try {
        const { balloonId, cartId } = req.params;

        const balloon = await Balloon.findById(balloonId);
        const cart = await Cart.findById(cartId);

        const balloonExits = cart.balloons.some(
            (item) => item.balloonId.toString() === balloon._id.toString()
        );

        if (balloonExits) {
            cart.balloons.forEach((item) => {
                if (item.balloonId.toString() === balloon._id.toString()) {
                    item.amount += 1;
                }
            });
        } else {
            cart.balloons = [
                ...cart.balloons,
                { balloonId: balloon._id, amount: 1 },
            ];
        }

        await cart.save();

        res.status(201).json(cart);
    } catch (err) {
        next(err);
    } */
// }
