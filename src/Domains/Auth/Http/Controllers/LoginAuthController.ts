import { Request, Response } from 'express';
import BaseController from '../../../../Http/Controllers/BaseController';
import LoginAuthBussiness from '../../Business/LoginAuthBussiness';

class LoginAuthController extends BaseController {
  process(req: Request, res: Response) {
    return new LoginAuthBussiness().process(req, res);
  }
}

export default LoginAuthController;
