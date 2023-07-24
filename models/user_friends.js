import { DataTypes } from 'sequelize'
import { MODEL_OPTS } from '../config/constants'
import sequelize from '../db'
const UserFriends = sequelize.define(
  'user_friends',
  {
    status: {
      type: DataTypes.ENUM('pending', 'accepted'),
      allowNull: false,
      defaultValue: 'pending',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  MODEL_OPTS,
)
// UserFriends.associate = function (models) {
//   UserFriends.belongsTo(models.users, { foreignKey: 'user_id'}),
//   UserFriends.belongsTo(models.users, { foreignKey: 'friend_id'})
// }
export { UserFriends }
