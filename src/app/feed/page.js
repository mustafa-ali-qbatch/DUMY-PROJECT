import Image from "next/image";
import Sidebar from "../sidebar";
import Post from "../post";
import Footer from "../footer";
import  { Posts } from "./../../../models/posts"
  console.log("User model:", Posts)
  const fetchDataFromUsersTable = async () => {
    try {
      const posts = await Posts.findAll({raw: true}); // Fetch all users from the "users" table
      console.log('Users:', posts);
      return posts
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const arr = await fetchDataFromUsersTable()
  console.log("data: ", arr)
// const arr = [
//   {
//     id: 1,
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     author: "Loyce Kuvalis",
//     timestamp: "16 December at 08:25",
//     content:
//       "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
//     comments: "8",
//     likes: "33",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     author: "Loyce Kuvalis",
//     timestamp: "16 December at 08:25",
//     content:
//       "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
//     comments: "8",
//     likes: "33",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     author: "Loyce Kuvalis",
//     timestamp: "16 December at 08:25",
//     content:
//       "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
//     comments: "8",
//     likes: "33",
//   },
// ];
export default function Mustafa() {
console.log("arr....", arr)
  return (
    <>
      <Sidebar />
      {arr.length  &&
      arr?.map((item) => {
        console.log("items:", item)
        return <Post data={item} key={item.id} />;
      })}
      <Footer />

    </>
  );
}
