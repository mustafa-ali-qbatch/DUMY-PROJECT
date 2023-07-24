import { DataTypes } from 'sequelize'
import sequelize from '../db'
import { Posts } from './posts'
const Users = sequelize.define('users', {
  user_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  profile_picture: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

// Users.associate = function (models) {
//   console.log("models: ", models)
//   Users.hasMany(Posts, { foreignKey: 'user_id' }),
//   Users.belongsToMany(models.users, {
//       through: { model: models.user_friends },
//       as: 'Friends',
//       foreignKey: 'user_id',
//       otherKey: 'friend_id',
//     })
// }

// Users.associate = function (models) {
// }

export { Users }
