import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import encriptyPasswordService from '../Services/EncriptyPasswordService';
import SingUpAuthRepositores from '../Repositores/SingUpAuthRepositores';

class SingUpAuthBusiness extends BaseBusiness {
  async process(req: Request, res: Response) {
    const pass = encriptyPasswordService(req.body.password);
    if (!pass) {
      return formatResponseError(res, 'Try Again Later!', 500);
    }

    const isEmailExist = await SingUpAuthRepositores.isEmailExist(req.body.email);
    if (isEmailExist) {
      return formatResponseError(res, 'Email is already exist!', 401);
    }

    const createAccount = await SingUpAuthRepositores.setUser(
      req.body.name,
      req.body.email,
      pass,
    );

    if (!createAccount) {
      return formatResponseError(res, 'DB Error to create a new user, try again later!', 500);
    }

    return formatResponseSuccess(res, { message: 'Singed Up Successful! User Created' });
  }
}

export default SingUpAuthBusiness;
