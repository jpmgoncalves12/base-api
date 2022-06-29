import { Request, Response } from 'express';
import BaseController from '../../../../Http/Controllers/BaseController';
import AddScheduleBusiness from '../../Business/AddScheduleBussines';

class AddScheduleController extends BaseController {
	process(req: Request, res: Response) {
		return new AddScheduleBusiness().process(req, res);
	}
}

export default AddScheduleController;
