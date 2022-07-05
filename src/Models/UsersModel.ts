import {
  Table, Column, DataType, Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
})

class Users extends Model {
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
    { type: DataType.STRING },
  )
    email!: string;

  @Column(
    { type: DataType.STRING },
  )
    password!: string;
}

export default Users;
