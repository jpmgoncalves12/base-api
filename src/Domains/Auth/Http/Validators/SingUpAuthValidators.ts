import { nameValidation, isEmailValidation, lengthValidation } from '../../../../Http/Validators/BaseValidator';

class SingUpAuthValidators {
  process(
    name: string,
    email: string,
    password: string,
  ): boolean {
    const isValid = {
      nameValid: nameValidation(name),
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

export default new SingUpAuthValidators();
