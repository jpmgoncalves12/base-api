import { Request, Response } from 'express';
import BaseController from '../../../../Http/Controllers/BaseController';

class AddScheduleController extends BaseController{
	constructor() {
		super();
	}

	execute(
		req: Request,
		res: Response
	) {
		return this.formatResponseSuccess(
			res,
			'teste',
			'message'
		);
	}
}

export default AddScheduleController;
