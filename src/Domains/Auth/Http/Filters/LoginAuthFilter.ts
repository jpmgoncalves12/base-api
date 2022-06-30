import LoginAuthValidators from '../../Http/Validators/LoginAuthValidators';

class LoginAuthFilter {
  process(
    data: {
      email: string,
      password: string
    },
  ): boolean {
    const valid = LoginAuthValidators.process(
      data.email,
      data.password,
    );

    if (!valid) {
      return false;
    }

    return true;
  }
}

export default new LoginAuthFilter();
