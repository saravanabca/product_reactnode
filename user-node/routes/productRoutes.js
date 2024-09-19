import { Router } from 'express';
const router = Router();
import { getAllProducts } from '../controllers/productController.js';

router.get('/products', getAllProducts);

export default router;
