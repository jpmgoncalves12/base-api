import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { formatResponseSuccess, formatResponseError } from '../../Utils/response.utils'
import { getToken } from '../../Configs/TokenConfig'

class AuthenticateJwtMiddleware {
	constructor() { }

	verifyToken = (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		console.log(this);
		let token = this.hasToken(req);

		if (!token) {
			return formatResponseError(res, 'No token provided!', 403);
		}

		let secret = getToken();
		if (!secret) {
			return formatResponseError(res, 'Internal Server Error', 500)
		}

		verify(token, getToken, (err: any, decoded: any) => {
			if (err) {
				return formatResponseError(res, "Unauthorized!", 401)
			}

			next();
		});
	}

	hasToken(req: Request): string {
		let token = req.headers.authorization ?? '';

		if (!token) {
			return '';
		}

		if (token.toLowerCase().startsWith('bearer')) {
			token = token.slice('bearer'.length).trim();
		}

		return token;
	}
}


export default new AuthenticateJwtMiddleware();