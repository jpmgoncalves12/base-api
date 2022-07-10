import BaseRepositores from '../../../Repositores/BaseRepositores';
import UserModel from '../../../Models/UsersModel';

class UserAuthRepositores extends BaseRepositores {
  async searchByUlid(
    ulid: string,
  ): Promise<false | { id: string, name: string }> {
    (await this.connection).addModels([UserModel]);

    const result = await UserModel.findOne({
      where: {
        id: ulid,
      },
    });

    if (!result) {
      return false;
    }

    const data = {
      id: result.id,
      name: result.name,
    };

    return data;
  }
}

export default new UserAuthRepositores();
