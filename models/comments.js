import { DataTypes } from 'sequelize'
import sequelize from '../db'
MODEL_OPTS = { underscored: true, updatedAt: 'updated_at', createdAt: 'created_at' }
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
