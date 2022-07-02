import { Request } from 'express';
import LoginAuthValidators from '../../Http/Validators/LoginAuthValidators';

class LoginAuthFilter {
  process(
    req: Request,
  ): boolean {
    const email = req.body.email ?? '';
    const password = req.body.password ?? '';

    return LoginAuthValidators.process(
      email,
      password,
    );
  }
}

export default new LoginAuthFilter();
