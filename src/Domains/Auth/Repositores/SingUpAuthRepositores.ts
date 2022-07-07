import { ulid } from 'ulid';
import BaseRepositores from '../../../Repositores/BaseRepositores';
import UserModel from '../../../Models/UsersModel';

class SingUpAuthRepositores extends BaseRepositores {
  async isEmailExist(
    email: string,
  ): Promise<false | UserModel> {
    (await this.connection).addModels([UserModel]);

    const result = await UserModel.findOne({
      where: {
        email,
      },
    });

    if (!result) {
      return false;
    }

    return result;
  }

  async setUser(
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> {
    (await this.connection).addModels([UserModel]);

    try {
      await UserModel.create({
        id: ulid(),
        name,
        email,
        password,
      });

      return true;
    } catch (err) {
      return false;
    }
  }
}

export default new SingUpAuthRepositores();
