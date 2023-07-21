import { DataTypes }  from 'sequelize';
import  sequelize  from '../db';
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
Users.hasMany(sequelize.models.posts, {
    foreignKey: 'user_id', 
    as: 'posts',
  });
export { Users }