import { Router } from 'express';
import { getDashboard } from '../controllers/dashboard';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/', authMiddleware, getDashboard);

export default router;
