import { Posts } from './../../../models/posts'
import { Users } from './../../../models/users'
import { UserFriends } from '../../../models/user_friends'
import { setUpAcosiation } from '../../../models/associations'
setUpAcosiation()
const fetchPosts = async () => {
  try {
    const posts = await Posts.findAll({ raw: true }) // Fetch all users from the "users" table
    return posts
  } catch (error) {
    return error
  }
}

const fetchPostsByUser = async () => {
  try {
    const posts = await Users.findAll({
      where: { id: 1 },
      raw: true,
      include: {
        model: Posts,
      },
    })
    return posts
  } catch (error) {
    return error
  }
}

const fetchFriends = async () => {
  try {
    const usersWithPendingRequests = await Users.findAll({
      where: { id: 1 },
      raw: true,
      attributes: ['id', 'user_name', 'email'],
      include: {
        model: Users,
        as: 'Friends',
        through: { attributes: ['id', 'friend_id', 'status'], where: { status: 'pending' } },
      },
    })
    return usersWithPendingRequests
  } catch (error) {
    return error
  }
}

const addPendingFriend = async (userId, friendId) => {
  try {
    const users = await UserFriends.update({ status: 'accepted' }, { where: { user_id: userId, friend_id: friendId } })
    return users
  } catch (error) {
    return error
  }
}

const addFriend = async (userId, friendId) => {
  try {
    const users = await UserFriends.create({ user_id: userId, friend_id: friendId })
    return users
  } catch (error) {
    return error
  }
}

export { fetchPosts, fetchFriends, fetchPostsByUser, addPendingFriend, addFriend }
