import { Router } from 'express';
const router = Router();
import { addToCart, getCartItems, removeFromCart } from '../controllers/cartController.js';

router.post('/cart', addToCart);
router.get('/cart', getCartItems);
router.delete('/cart/:id', removeFromCart);


export default router;
