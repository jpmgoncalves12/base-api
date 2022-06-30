import { isEmailValidation, lengthValidation } from '../../../../Http/Validators/BaseValidator';

class LoginAuthValidators {
  process(
    email: string,
    password: string,
  ): boolean {
    if (
      !isEmailValidation(email) ||
      !lengthValidation(password, 8)
    ) {
      return false;
    }

    return true;
  }
}

export default new LoginAuthValidators();
