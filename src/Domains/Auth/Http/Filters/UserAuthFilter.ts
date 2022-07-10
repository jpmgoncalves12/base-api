import UserAuthValidators from '../../Http/Validators/UserAuthValidators';
import ulidJWTDecode from '../../../../Utils/JWTDecode';

class UserAuthFilter {
  process(
    JWT: string,
  ): boolean {
    const ulid = ulidJWTDecode(JWT);
    if (!ulid) {
      return false;
    }

    return UserAuthValidators.process(
      ulid,
    );
  }
}

export default new UserAuthFilter();
