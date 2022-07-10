import { Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import { formatResponseSuccess, formatResponseError } from '../../../Utils/ResponseUtils';
import UserAuthRepositores from '../Repositores/UserAuthRepositores';

class UserAuthBusiness extends BaseBusiness {
  async process(ulid: string, res: Response) {
    const user = await UserAuthRepositores.searchByUlid(
      ulid,
    );

    if (!user) {
      return formatResponseError(res, 'DB Error to search user, try again later!', 500);
    }

    return formatResponseSuccess(res, { user });
  }
}

export default UserAuthBusiness;
