import { Posts } from '../../../models/posts'
import { Users } from '../../../models/users'
import { UserFriends } from '../../../models/user_friends'
import { setUpAcosiation } from '../../../models/associations'
import * as bcrypt from "bcrypt";
setUpAcosiation()
const fetchPosts = async () => {
  try {
    const posts = await Posts.findAll({ raw: true, include: {model: Users, attributes: ["user_name"]} }) // Fetch all users from the "users" table
    return posts
  } catch (error) {
    return error
  }
}

const fetchPostsByUser = async (userId) => {
  try {
    const posts = await Posts.findAll({ raw: true, include: {model: Users, attributes: ["user_name"]}, where: {user_id: userId} })
    return posts
  } catch (error) {
    return error
  }
}

const fetchFriends = async (status) => {
  try {
    const usersWithPendingRequests = await Users.findAll({
      where: { id: 1 },
      raw: true,
      attributes: ['id', 'user_name', 'email'],
      include: {
        model: Users,
        as: 'Friends',
        through: { attributes: ['id', 'friend_id', 'status'], where: { status } },
      },
    })
    console.log('user without pending request: ', usersWithPendingRequests)
    return usersWithPendingRequests
  } catch (error) {
    console.log('Error: ', error)
    return error
  }
}

const addPendingFriend = async (userId, friendId) => {
  try {
    const users = await UserFriends.update({ status: 'accepted' }, { where: { user_id: userId, friend_id: friendId } })
    console.log('user without pending request: ', users)
    return users
  } catch (error) {
    console.log('Error: ', error)
    return error
  }
}

const addFriend = async (userId, friendId) => {
  try {
    const users = await UserFriends.create({ user_id: userId, friend_id: friendId })
    console.log('user without pending request: ', users)
    return users
  } catch (error) {
    console.log('Error: ', error)
    return error
  }
}


const signup = async (body) => {
  try {
    console.log("body: ",body)
    const { email, password, confirmPassword } = body;
    if (!email || !password) throw new BadRequestException("Email or password is not provided");
    const user = await Users.findOne({ where: { email } });
    if (user) throw new BadRequestException("User with this email alraedy exist");
    if (confirmPassword !== password) throw new BadRequestException("Password doesn't match each other");
    const strongPassword = new RegExp(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    if (!strongPassword.test(password))  throw new BadRequestException("Password not strong enough!!");
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await Users.create({
      user_name: email,
      email,
      password: hash,
      profile_picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    });
    return newUser
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export { fetchPosts, fetchFriends, fetchPostsByUser, addPendingFriend, addFriend, signup }
