import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import encriptyPasswordService from '../Services/EncriptyPasswordService';
import LoginRepositores from '../Repositores/LoginRepositores';

class LoginAuthBusiness extends BaseBusiness {
  async process(req: Request, res: Response) {
    const pass = encriptyPasswordService(req.body.password);
    if (!pass) {
      return formatResponseError(res, 'Try Again Later!', 500);
    }

    const id = await LoginRepositores.getAccountLogin('jpmgoncalves12@gmail.com');

    const payload = {
      context: {
        user: {
          ulid: id,
          displayName: 'João',
          fullName: 'João Pedro Martins Gonçalves',
        },
        roles: ['admin', 'finalUser'],
      },
    };

    const token = generateJwtService(payload);
    if (!token) {
      return formatResponseError(res, 'Try Again Later', 500);
    }

    const data = { Token: token };
    return formatResponseSuccess(res, data, 'Success Login!');
  }
}

export default LoginAuthBusiness;
