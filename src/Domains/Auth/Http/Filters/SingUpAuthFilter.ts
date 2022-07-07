import { Request } from 'express';
import SingUpAuthValidators from '../../Http/Validators/SingUpAuthValidators';

class LoginAuthFilter {
  process(
    req: Request,
  ): boolean {
    const name = req.body.name ?? '';
    const email = req.body.email ?? '';
    const password = req.body.password ?? '';

    return SingUpAuthValidators.process(
      name,
      email,
      password,
    );
  }
}

export default new LoginAuthFilter();
