import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import encriptyPasswordService from '../Services/EncriptyPasswordService';

class LoginAuthBusiness extends BaseBusiness {
  process(req: Request, res: Response) {
    // Todo: Login Valition First
    const pass = encriptyPasswordService(req.body.password);

    if (!pass) {
      return formatResponseError(
        res,
        'Try Again Later',
        500,
      );
    }

    const payload = {
      context: {
        user: {
          ulid: '01G6S52KF72D3GZEK104A6FTZ4',
          displayName: 'João',
          fullName: 'João Pedro Martins Gonçalves',
        },
        roles: ['admin', 'finalUser'],
      },
    };

    const token = generateJwtService(payload);
    if (!token) {
      return formatResponseError(
        res,
        'Try Again Later',
        500,
      );
    }

    const data = { Token: token };
    return formatResponseSuccess(res, data, 'Success Login!');
  }
}

export default LoginAuthBusiness;
