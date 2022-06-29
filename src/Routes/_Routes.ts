import express from "express";
import AuthenticateJwtMiddleware from '../Http/Middlewares/AuthenticateJwt';

import ScheduleRoutes from './ScheduleRoutes'
import AuthRoutes from './AuthRoutes'

const router = express.Router();

router.use('/auth', AuthenticateJwtMiddleware.verifyToken, AuthRoutes);

router.use('/calendar', ScheduleRoutes);

export default router;