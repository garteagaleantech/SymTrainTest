import { Model, DataTypes } from 'sequelize';
import { RecipeModel } from './recipe.model';
import { sequelize } from './sequelize';

export class UserModel extends Model<User> {}
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  },
  {
    sequelize,
    modelName: 'User',
    indexes: [{ unique: true, fields: ['email'] }],
    timestamps: true
  }
);

UserModel.hasMany(RecipeModel, {
  foreignKey: 'userId'
});
