import { Model, DataTypes } from 'sequelize';
import { UserModel } from '.';
import { sequelize } from './sequelize';

export class RecipeModel extends Model<RecipeExtended> {}
RecipeModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: UserModel,
        key: 'id'
      },
      allowNull: false
    },
    title: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false }
  },
  {
    sequelize,
    modelName: 'Recipe',
    timestamps: true
  }
);
