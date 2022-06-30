import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';

class LoginAuthBusiness extends BaseBusiness {
  process(req: Request, res: Response) {
    // Todo: Login Valition First
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

    // Todo: ValidUntil
    const data = {
      Token: token,
      ValidUntil: 'timestamp',
    };

    return formatResponseSuccess(res, data, 'Success Login!');
  }
}

export default LoginAuthBusiness;
