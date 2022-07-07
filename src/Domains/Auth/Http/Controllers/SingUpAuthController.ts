import { Request, Response } from 'express';
import { formatResponseError } from '../../../../Utils/ResponseUtils';

import BaseController from '../../../../Http/Controllers/BaseController';
import SingUpAuthBussiness from '../../Business/SingUpAuthBussiness';
import SingUpAuthFilter from '../Filters/SingUpAuthFilter';

class SingUpAuthController extends BaseController {
  process(req: Request, res: Response) {
    const validator = SingUpAuthFilter.process(req);
    if (!validator) {
      return formatResponseError(res, 'Invalid fields Format.', 400);
    }

    return new SingUpAuthBussiness().process(req, res);
  }
}

export default SingUpAuthController;
