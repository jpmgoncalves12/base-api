import express from 'express';
import AuthenticateJwtMiddleware from '../Http/Middlewares/AuthenticateJwt';

import ScheduleRoutes from './ScheduleRoutes';
import AuthRoutes from './AuthRoutes';

const router = express.Router();

router.use('/auth', AuthRoutes);

// MiddWare Use Example
// router.use('/auth', AuthenticateJwtMiddleware.verifyToken, AuthRoutes);

router.use('/calendar', AuthenticateJwtMiddleware.verifyToken, ScheduleRoutes);

export default router;
