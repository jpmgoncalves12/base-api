import dotenv from 'dotenv';
import { Dialect, Sequelize } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';

dotenv.config();

const dbDatabase = process.env.DB_DATABASE as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPort = Number(process.env.DB_PORT);
const dbPassword = process.env.DB_PASSWORD;

export default async () => {
  console.log('[DB] Iniciando conexão com o banco de dados...');

  const sequelizeConnection = new Sequelize({
    host: dbHost,
    dialect: dbDriver,
    database: dbDatabase,
    username: dbUser,
    password: dbPassword,
    port: dbPort,
    models: [`${__dirname}/../models`],
  } as SequelizeOptions);

  await sequelizeConnection.sync({ force: false });
  return sequelizeConnection;
};
