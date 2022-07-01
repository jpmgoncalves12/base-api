import { Sequelize } from 'sequelize';
import sequelizeConnection from '../Configs/DBConnection';

abstract class BaseRepositores {
  connection: Sequelize;

  constructor() {
    this.connection = sequelizeConnection;
  }
}
