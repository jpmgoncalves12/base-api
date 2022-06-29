import { Request, Response } from 'express';
import BaseBusiness from '../../../Business/BaseBusiness';

class GenerateAuthBusiness extends BaseBusiness {
	process(req: Request, res: Response) {
		// Here Is my Bussines Rule
		return this.formatResponseSuccess(res,'Auth');
	}
}

export default GenerateAuthBusiness;
