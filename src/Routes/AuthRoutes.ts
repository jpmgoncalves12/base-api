import express from 'express';

import LoginAuthController from '../Domains/Auth/Http/Controllers/LoginAuthController';
import SingUpAuthController from '../Domains/Auth/Http/Controllers/SingUpAuthController';
import UserAuthController from '../Domains/Auth/Http/Controllers/UserAuthController';

import AuthenticateJwtMiddleware from '../Http/Middlewares/AuthenticateJwt';

const router = express.Router();

router.post(
  '/login',
  (req, res) => new LoginAuthController().process(req, res),
);

router.post(
  '/singup',
  (req, res) => new SingUpAuthController().process(req, res),
);

router.get(
  '/user',
  AuthenticateJwtMiddleware.verifyToken,
  (req, res) => new UserAuthController().process(req, res),
);

export default router;
