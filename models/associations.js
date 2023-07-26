import { Comments } from './comments'
import { Likes } from './likes'
import { Posts } from './posts'
import { Users } from './users'
import { UserFriends } from './user_friends'
const setUpAcosiation = () => {
  Users.hasMany(Posts, { foreignKey: 'user_id' })
  Posts.belongsTo(Users)
  Posts.hasMany(Comments, { foreignKey: 'post_id' })
  Posts.hasMany(Likes, { foreignKey: 'post_id' })
  Comments.belongsTo(Posts)
  Users.belongsToMany(Users, {
    through: { model: UserFriends },
    as: 'Friends',
    foreignKey: 'user_id',
    otherKey: 'friend_id',
  })
}
export { setUpAcosiation }
