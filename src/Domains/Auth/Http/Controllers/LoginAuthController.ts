import { Request, Response } from 'express';
import { formatResponseError } from '../../../../Utils/ResponseUtils';

import BaseController from '../../../../Http/Controllers/BaseController';
import LoginAuthBussiness from '../../Business/LoginAuthBussiness';
import LoginAuthFilter from '../Filters/LoginAuthFilter';

class LoginAuthController extends BaseController {
  process(req: Request, res: Response) {
    const validator = LoginAuthFilter.process(req);
    if (!validator) {
      return formatResponseError(res, 'Invalid fields Format.', 400);
    }

    return new LoginAuthBussiness().process(req, res);
  }
}

export default LoginAuthController;
