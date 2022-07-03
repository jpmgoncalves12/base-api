import {
  Table, Model, Column, DataType,
} from 'sequelize-typescript';

@Table
class Person extends Model {
  @Column()
    id: string;

  @Column()
    name: string;

  @Column({
    type: DataType.DATEONLY,
  })
    born: Date;

  @Column
    cpf: string;

  @Column
    gender: string;
}

export default new Person();
