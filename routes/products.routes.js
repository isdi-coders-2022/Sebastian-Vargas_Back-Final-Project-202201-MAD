import express from 'express';
import {
    getAllProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

router.route('/list').get(getAllProducts).post();
router.route('/:id').get(getProduct);
router.post('/', addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
