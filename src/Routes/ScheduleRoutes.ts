import express from 'express';
import AddScheduleController from '../Domains/Schedule/Http/Controllers/AddScheduleController';

const router = express.Router();

router.get('/', (req, res) => new AddScheduleController().process(req, res));

export default router;
