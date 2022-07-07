import BaseRepositores from '../../../Repositores/BaseRepositores';
import UserModel from '../../../Models/UsersModel';

class LoginAuthRepositores extends BaseRepositores {
  async getAccountLogin(
    email: string,
    password: string,
  ): Promise<false | UserModel> {
    (await this.connection).addModels([UserModel]);

    const result = await UserModel.findOne({
      where: {
        email,
        password,
      },
    });

    if (!result) {
      return false;
    }

    return result;
  }
}

export default new LoginAuthRepositores();
