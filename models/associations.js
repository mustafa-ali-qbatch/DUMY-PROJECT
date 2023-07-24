import { Comments } from './comments'
import { Posts } from './posts'
import { Users } from './users'
import { UserFriends } from './user_friends'

// Users.hasMany(Posts, { foreignKey: 'user_id' })

// Posts.belongsTo(Users)
// Posts.hasMany(models.likes, { foreignKey: 'post_id'})
// Posts.hasMany(models.comments, { foreignKey: 'post_id'})
const setUpAcosiation = () => {
  Users.hasMany(Posts, { foreignKey: 'user_id' })
  Posts.belongsTo(Users)
  Posts.hasMany(Comments, { foreignKey: 'post_id' })
  Users.belongsToMany(Users, {
    through: { model: UserFriends },
    as: 'Friends',
    foreignKey: 'user_id',
    otherKey: 'friend_id',
  })
}
export { setUpAcosiation }
