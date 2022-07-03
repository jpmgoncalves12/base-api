import BaseRepositores from '../../../Repositores/BaseRepositores';

import PersonModel from '../../../Models/PersonModel';

class LoginRepositores extends BaseRepositores {
  constructor() {
    super(
      'person',
      PersonModel,
    );
  }
}

export default new LoginRepositores();
