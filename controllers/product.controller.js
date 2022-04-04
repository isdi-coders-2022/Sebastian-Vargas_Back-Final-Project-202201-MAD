import Product from '../models/product.model.js';
import User from '../models/user.model.js';
import * as crud from '../services/crud.js';
import { createError } from '../services/errors.js';

export const getProduct = async (req, res, next) => {
    try {
        const resp = await crud.getProduct(req.params.id, Product);
        res.json(resp);
    } catch (error) {
        next(createError(error));
    }
};

export const getAllProducts = async (req, res, next) => {
    try {
        const resp = await crud.getAllProducts();
        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};

/*
export const addProduct = async (req, res, next) => {
    const productToBeAdded = await crud.addProduct(req.params.id, Product);
    console.log('Primer console.log() => ' + productToBeAdded);
    res.json(productToBeAdded);
    console.log('Segundo console.log() => ' + res.json(productToBeAdded));
}; */

export const updateProduct = async (req, res, next) => {
    console.log(req.body);
    try {
        const resp = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(resp);
        res.status(200);
    } catch (err) {
        next(createError(err));
    }
};

export const addProduct = async (req, res, next) => {
    try {
        const result = await Product.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(createError(error));
    }
};

export const deleteProduct = async (req, res, next) => {
    console.log(req.params.id);
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(202);
        res.json({ 'Deleted Product': req.params.id });
    } catch (err) {
        next(createError(err));
    }
};

/* export const getAllProductsByCategory = async (req, res, next) => {
    try {
        const resp = await Product.find({
            id_apartment: idApartment,
        }).populate('id_apartment', {
            current_tenant: 0,
            history_tenant: 0,
            status: 0,
            photos: 0,
            incidents: 0,
        });

        res.json(resp);
    } catch (err) {
        next(createError(err));
    }
};
 */
