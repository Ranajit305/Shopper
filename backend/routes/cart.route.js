import express from 'express'
import { addToCart, getCart, removeFromCart, updateQuantity } from '../controllers/cart.controller.js'
import verifyToken from '../utils/verifyToken.js'

const router = express.Router();

router.get('/', verifyToken, getCart);
router.post('/:productId', verifyToken, addToCart);
router.delete('/:productId', verifyToken, removeFromCart);
router.put('/:productId', verifyToken, updateQuantity);

export default router