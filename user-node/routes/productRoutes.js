import { Router } from 'express';
const router = Router();
import { getAllProducts } from '../controllers/productController.js';

// Get all products
router.get('/products', getAllProducts);

export default router;
