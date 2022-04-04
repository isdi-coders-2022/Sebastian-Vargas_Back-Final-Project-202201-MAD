import express from 'express';
import { getUser, userRegister } from '../controllers/user.controller.js';
import { login } from '../controllers/login.controller.js';
import { getAllUsers } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', login);
router.get('/list', getAllUsers);
router.get('/:id', getUser);

export default router;
