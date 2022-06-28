import express from "express";

import ScheduleRoutes from './ScheduleRoutes'

const router = express.Router();

router.use('/calendar', ScheduleRoutes);

export default router;