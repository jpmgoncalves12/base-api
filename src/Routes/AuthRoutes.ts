import express from 'express';

import LoginAuthController from '../Domains/Auth/Http/Controllers/LoginAuthController';

const router = express.Router();

router.post('/login', (req, res) => new LoginAuthController().process(req, res));

export default router;
