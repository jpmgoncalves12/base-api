import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
// import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import encriptyPasswordService from '../Services/EncriptyPasswordService';
// import LoginRepositores from '../Repositores/LoginRepositores';

class LoginAuthBusiness extends BaseBusiness {
  async process(req: Request, res: Response) {
    const pass = encriptyPasswordService(req.body.password);
    if (!pass) {
      return formatResponseError(res, 'Try Again Later!', 500);
    }

    // const account = await LoginRepositores.getAccountLogin(req.body.email);
    // if (!account) {
    //   return formatResponseError(res, 'Unauthorized!', 401);
    // }

    // const payload = {
    //   context: {
    //     user: {
    //       ulid: account.id,
    //       displayName: account.name,
    //       email: account.email,
    //     },
    //   },
    // };

    // const token = generateJwtService(payload);
    // if (!token) {
    //   return formatResponseError(res, 'Try Again Later, can`t generate the token!', 500);
    // }

    // const data = { Token: token };
    return formatResponseSuccess(res, { pass }, 'Success Singed Up!');
  }
}

export default LoginAuthBusiness;