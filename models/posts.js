import { DataTypes } from 'sequelize'
import sequelize from '../db'
const MODEL_OPTS = { underscored: true, updatedAt: 'updated_at', createdAt: 'created_at' }
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
// Posts.hasMany(sequelize.models.likes, {
//     foreignKey: 'post_id', 
//     as: 'posts',
//   });
export { Posts }
