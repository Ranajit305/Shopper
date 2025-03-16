import express from 'express'
import { checkAuth, login, logout, signup, updateAddresss } from '../controllers/user.controller.js';
import verifyToken from '../utils/verifyToken.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/check', verifyToken, checkAuth);
router.post('/logout', verifyToken, logout);
router.put('/update', verifyToken, updateAddresss);

export default router