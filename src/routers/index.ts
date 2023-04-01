import { Router } from 'express';
import healthRouter from '../third-week/health.router';
import storeRouter from '../third-week/products.route';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', storeRouter);

export default (router);