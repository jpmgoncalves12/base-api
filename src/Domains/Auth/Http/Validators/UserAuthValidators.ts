import { ULIDValidation } from '../../../../Http/Validators/BaseValidator';

class UserAuthValidators {
  process(
    ulid: string,
  ): boolean {
    const isValid = {
      nameValid: ULIDValidation(ulid),
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

export default new UserAuthValidators();
