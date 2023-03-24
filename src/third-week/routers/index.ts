import { Router } from 'express';
import healthRouter from '../first exercise/health.router';
import storeRouter from '../second-exercise/store.route';

const router = Router();

router.use('/health', healthRouter);
router.use('/products', storeRouter);

export default (router);