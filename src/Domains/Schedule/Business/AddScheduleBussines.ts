import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import { formatResponseSuccess } from '../../../Utils/ResponseUtils';

class AddScheduleBusiness extends BaseBusiness {
  process(req: Request, res: Response) {
    // Here Is my Bussines Rule
    return formatResponseSuccess(res, 'abacate');
  }
}

export default AddScheduleBusiness;
