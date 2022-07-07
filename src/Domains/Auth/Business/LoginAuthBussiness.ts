import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import encriptyPasswordService from '../Services/EncriptyPasswordService';
import LoginAuthRepositores from '../Repositores/LoginAuthRepositores';

class LoginAuthBusiness extends BaseBusiness {
  async process(req: Request, res: Response) {
    const pass = encriptyPasswordService(req.body.password);
    if (!pass) {
      return formatResponseError(res, 'Try Again Later!', 500);
    }

    const account = await LoginAuthRepositores.getAccountLogin(
      req.body.email,
      pass,
    );
    if (!account) {
      return formatResponseError(res, 'Incorrect Credentials!', 401);
    }

    const payload = {
      user: {
        ulid: account.id,
        name: account.name,
        email: account.email,
      },
      roles: [
        'admin',
      ],
    };

    const token = generateJwtService(payload);
    if (!token) {
      return formatResponseError(res, 'Try Again Later, can`t generate the token!', 500);
    }

    const data = { token };
    return formatResponseSuccess(res, data, 'Success Login!');
  }
}

export default LoginAuthBusiness;
