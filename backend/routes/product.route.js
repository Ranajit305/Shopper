import express from 'express'
import { addProduct, getProducts, deleteProduct, getAllOrders, updateOrderStatus } from '../controllers/product.controller.js'
import verifyToken from '../utils/verifyToken.js'
import verifyAdmin from '../utils/verifyAdmin.js'

const router = express.Router();

router.get('/:category', getProducts);
router.post('/', verifyToken, verifyAdmin, addProduct);
router.delete('/:productId', verifyToken, verifyAdmin, deleteProduct);
router.get('/', verifyToken, verifyAdmin, getAllOrders);
router.put('/:orderId', verifyToken, verifyAdmin, updateOrderStatus);

export default router