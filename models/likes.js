import { DataTypes } from 'sequelize'
import { MODEL_OPTS } from '../config/constants'
import sequelize from '../db'
const Likes = sequelize.define(
  'likes',
  {
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
    like_type: {
        type: DataTypes.ENUM('laugh', 'like', 'love'),
      }
  },
  MODEL_OPTS,
)
export { Likes }