import { DataTypes } from 'sequelize'
import { MODEL_OPTS } from '../config/constants'
import sequelize from '../db'
const Comments = sequelize.define(
  'comments',
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', field: 'id' },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        field: 'id',
      },
    },
    content: { type: DataTypes.STRING, allowNull: false },
  },
  MODEL_OPTS,
)

export { Comments }
