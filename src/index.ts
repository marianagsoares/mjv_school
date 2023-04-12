import { Router } from 'express';
import healthRouter from './health.router';
import storeRouter from './routers/products.route';
import userRouter from './routers/user.route';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', storeRouter);
router.use('/users', userRouter);

export default (router);