import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';
import { formatResponseSuccess } from '../../../Utils/ResponseUtils';

class AddScheduleBusiness extends BaseBusiness {
  process(req: Request, res: Response) {
    // Here Is my Bussines Rule
    const data = { 'return title': 'abacate' };

    return formatResponseSuccess(res, data);
  }
}

export default AddScheduleBusiness;
