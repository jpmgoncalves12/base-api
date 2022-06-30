import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { formatResponseError } from '../../Utils/ResponseUtils';
import getToken from '../../Configs/TokenConfig';

// eslint-disable-next-class consistent-return
class AuthenticateJwtMiddleware {
  verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction,
    // eslint-disable-next-line consistent-return
  ) => {
    const token = this.hasToken(req);

    if (!token) {
      return formatResponseError(res, 'No token provided!', 403);
    }

    const secret = getToken();
    if (!secret) {
      return formatResponseError(res, 'Internal Server Error', 500);
    }

    // eslint-disable-next-line consistent-return
    verify(token, secret, (err) => {
      if (err) {
        return formatResponseError(res, 'Unauthorized!', 401);
      }

      next();
    });
  };

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
