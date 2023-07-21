import { DataTypes } from 'sequelize'
import sequelize from '../db'
const MODEL_OPTS = { underscored: true, updatedAt: 'updated_at', createdAt: 'created_at' }
const Likes = sequelize.define(
  'likes',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: { tableName: 'posts', field: 'id' } },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: { tableName: 'users', field: 'id' } },
    },
  },
  MODEL_OPTS,
)
export { Likes }