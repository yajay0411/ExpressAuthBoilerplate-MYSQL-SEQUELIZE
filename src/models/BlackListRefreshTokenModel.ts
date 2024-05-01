import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/databases/DB_MySql";

export interface BlackListRefreshTokenAttributes {
  id?: number;
  refresh_token: string;
  expiresAt: Date;
}

class BlackListRefreshTokenModel
  extends Model<BlackListRefreshTokenAttributes>
  implements BlackListRefreshTokenAttributes
{
  public id!: number;
  public refresh_token!: string;
  public expiresAt!: Date;

  // Other methods and associations can be defined here
}

BlackListRefreshTokenModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "black_list_refresh_token",
  }
);

export default BlackListRefreshTokenModel;
