import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import LoginAuthValidators from '../Http/Validators/LoginAuthValidators';

class LoginAuthBusiness extends BaseBusiness {
  process(req: Request, res: Response) {
    const payload = {
      email: 'email@email.com',
      password: 'teste123',
    };

    const valid = LoginAuthValidators.process(
      payload.email,
      payload.password,
    );

    if (!valid) {
      return formatResponseError(
        res,
        'Bad Request! Invalid fields Format!',
        400,
      );
    }

    const token = generateJwtService(payload);

    if (!token) {
      return formatResponseError(
        res,
        'Try Again Later',
        500,
      );
    }

    const data = {
      Token: token,
    };

    return formatResponseSuccess(res, data, 'Succes');
  }
}

export default LoginAuthBusiness;
