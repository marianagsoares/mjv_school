import { Router } from 'express';
import healthRouter from './health.router';
import storeRouter from './routers/products.router';
import userRouter from './routers/user.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', storeRouter);
router.use('/users', userRouter);

export default (router);