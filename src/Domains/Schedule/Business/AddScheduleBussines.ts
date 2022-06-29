import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';

class AddScheduleBusiness extends BaseBusiness {
	process(req: Request, res: Response) {
		// Here Is my Bussines Rule
		return this.formatResponseSuccess(res,'abacate');
	}
}

export default AddScheduleBusiness;
