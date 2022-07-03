import BaseRepositores from '../../../Repositores/BaseRepositores';
import PersonModel from '../../../Models/PersonModel';

class LoginRepositores extends BaseRepositores {
  async getAccountLogin(
    email: string,
  ): Promise<string> {
    (await this.connection).addModels([PersonModel]);

    const result = await PersonModel.findOne({
      where: { email },
    });

    if (!result) {
      return '';
    }

    return result.id;
  }
}

export default new LoginRepositores();
