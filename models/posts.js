import { DataTypes } from 'sequelize'
import { MODEL_OPTS } from '../config/constants'
import sequelize from '../db'
import { Users } from './users'
const Posts = sequelize.define(
  'posts',
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: { tableName: 'users', field: 'id' } },
    },
    post_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    content: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  MODEL_OPTS,
)
export { Posts }
