import { isEmailValidation, lengthValidation } from '../../../../Http/Validators/BaseValidator';

class LoginAuthValidators {
  process(
    email: string,
    password: string,
  ): boolean {
    const isValid = {
      emailValid: isEmailValidation(email),
      psasValid: lengthValidation(password, 8),
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const [, value] of Object.entries(isValid)) {
      if (!value) {
        return false;
      }
    }

    return true;
  }
}

export default new LoginAuthValidators();
