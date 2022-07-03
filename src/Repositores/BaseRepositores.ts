import { Model, Sequelize } from 'sequelize';
import sequelizeConnection from '../Configs/DBConnection';

export default abstract class BaseRepositores {
  connection: Promise<Sequelize>;

  table: string;

  model: Model;

  constructor(
    table: string,
    model: Model,
  ) {
    this.connection = sequelizeConnection();
    this.table = table;
    this.model = model;
  }

  async getBtId() {
    console.log('resultado');
  }
}
