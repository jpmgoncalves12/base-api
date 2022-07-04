import {
  Table, Column, DataType, Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'persons',
})

class Persons extends Model {
  @Column(
    {
      type: DataType.STRING,
      primaryKey: true,
    },
  )
    id!: string;

  @Column(
    { type: DataType.STRING },
  )
    name!: string;

  @Column(
    { type: DataType.DATEONLY },
  )
    born!: string;

  @Column(
    { type: DataType.STRING },
  )
    cpf!: string;

  @Column(
    { type: DataType.STRING },
  )
    gender!: string;

  @Column(
    { type: DataType.STRING },
  )
    email!: string;
}

export default Persons;
