import Product from '../models/product.model.js';
import User from '../models/user.model.js';
import { createError } from './errors.js';

//Products

export async function getProduct(id, Product) {
    const result = await Product.findById(id);
    console.log(`El producto buscado es:\n${result}`);
    return result;
}

export async function getAllProducts() {
    const result = await Product.find({});
    console.log(`Los productos existentes son:\n${result}`);
    return result;
}
/*
export async function addProductToUser(id, Product) {
    const result = await Product.findById(id);
    return result;
} */

export async function updateProductInUser(req, res, next) {
    try {
    } catch (error) {}
}

export const addProduct = async (req, res, next) => {
    try {
        const result = await Product.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(createError(error));
    }
};

/* export async function deleteProduct(id, Product) {
    const result = await Product.findByIdAndDelete(id);
    console.log(`El producto eliminado es:\n${result}`);
    return result;
}
 */
//Users

export async function getUser(id, User) {
    const result = await User.findById(id);
    console.log(`El usuario buscado es:\n${result}`);
    return result;
}

export async function getAllUsers() {
    const result = await User.find({});
    console.log(`Los usuarios buscados son:\n${result}`);
    return result;
}
