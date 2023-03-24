import { Router } from 'express';
import healthRouter from './health.router';
import storeRouter from './store.route';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', storeRouter);

export default (router);