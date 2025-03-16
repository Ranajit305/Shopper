import express from 'express'
import verifyToken from '../utils/verifyToken.js'
import { cancelOrder, createOrder, getOrders, placeOrder } from '../controllers/order.controller.js'

const router = express.Router();

router.get('/', verifyToken, getOrders);
router.post('/place-order', verifyToken, placeOrder);
router.post('/create-order', verifyToken, createOrder);
router.put('/cancel-order', verifyToken, cancelOrder);

export default router