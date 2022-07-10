import { Request, Response } from 'express';
import { formatResponseError } from '../../../../Utils/ResponseUtils';

import BaseController from '../../../../Http/Controllers/BaseController';
import UserAuthBussiness from '../../Business/UserAuthBussiness';
import UserAuthFilter from '../Filters/UserAuthFilter';
import ulidJWTDecode from '../../../../Utils/JWTDecode';

class UserAuthController extends BaseController {
  process(req: Request, res: Response) {
    const JWT = <string> req.headers.authorization;

    const validator = UserAuthFilter.process(JWT);
    if (!validator) {
      return formatResponseError(res, 'Invalid ULID.', 400);
    }

    const ulid = ulidJWTDecode(JWT);
    return new UserAuthBussiness().process(ulid, res);
  }
}

export default UserAuthController;
