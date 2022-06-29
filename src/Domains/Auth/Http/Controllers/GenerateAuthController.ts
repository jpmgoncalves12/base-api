import { Request, Response } from 'express';
import BaseController from '../../../../Http/Controllers/BaseController';
import GenerateAuthBusiness from '../../Business/GenerateAuthBussines';

class GenerateAuthController extends BaseController {
	process(req: Request, res: Response) {
		return new GenerateAuthBusiness().process(req, res);
	}
}

export default GenerateAuthController;
