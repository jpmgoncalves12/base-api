import BaseRepositores from '../../../Repositores/BaseRepositores';
import UserModel from '../../../Models/UsersModel';

class LoginRepositores extends BaseRepositores {
  async getAccountLogin(
    email: string,
  ): Promise<false | UserModel> {
    (await this.connection).addModels([UserModel]);

    const result = await UserModel.findOne({
      where: { email },
    });

    if (!result) {
      return false;
    }

    return result;
  }
}

export default new LoginRepositores();
