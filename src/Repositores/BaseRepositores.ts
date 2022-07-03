import { Sequelize } from 'sequelize-typescript';

import sequelizeConnection from '../Configs/DBConnection';

export default abstract class BaseRepositores {
  connection: Promise<Sequelize>;

  constructor() {
    this.connection = sequelizeConnection();
  }
}
