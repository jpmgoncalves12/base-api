import {
  Table, Model, Column, DataType,
} from 'sequelize-typescript';

@Table
class Account extends Model {
  @Column
    nome: string;

  @Column({
    type: DataType.DATE,
  })
    data_nasc: Date;

  @Column
    cpf: string;

  @Column
    sexo: string;

  @Column
    login: string;

  @Column
    senha: string;

  @Column({
    defaultValue: 'usuario',
  })
    nivel_acesso: string;
}

export default new Account();
