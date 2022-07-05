import express from 'express';

import LoginAuthController from '../Domains/Auth/Http/Controllers/LoginAuthController';
import SingUpAuthController from '../Domains/Auth/Http/Controllers/SingUpAuthController';

const router = express.Router();

router.post('/login', (req, res) => new LoginAuthController().process(req, res));
router.post('/singup', (req, res) => new SingUpAuthController().process(req, res));

export default router;
