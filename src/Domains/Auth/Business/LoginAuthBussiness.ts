import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import generateJwtService from '../Services/GenerateJwtService';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/response.utils';

class LoginAuthBusiness extends BaseBusiness {
  process(req: Request, res: Response) {
    const payload = {
      name: 'João Pedro',
      ulid: '01G6PGK4DQXKP8FRJGXH2VJCY7',
      accessTypes: [
        'getTeams',
        'addTeams',
        'updateTeams',
        'deleteTeams',
      ],
    };

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
