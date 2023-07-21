import Image from "next/image";
import Sidebar from "../sidebar";
import Post from "../post";
import Footer from "../footer";
import FriendCard from "../friend_card";
import { Posts } from "./../../../models/posts";
console.log("User model:", Posts);
const fetchDataFromUsersTable = async () => {
  try {
    const posts = await Posts.findAll({ raw: true }); // Fetch all users from the "users" table
    console.log("Users:", posts);
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const friends = [
    {
      id: 1,
      name: "Mustafa",
      bio: "I don't know who I am",
      city: "Faisalabad",
      comments_count: "35",
      mutual_con: "10",
      likes_count: "100",
    },
    {
      id: 2,
      name: "Ali",
      bio: "I don't know who I am",
      city: "Faisalabad",
      comments_count: "35",
      mutual_con: "10",
      likes_count: "100",
    },
    {
      id: 3,
      name: "Afatsum",
      bio: "I don't know who I am",
      city: "Faisalabad",
      comments_count: "35",
      mutual_con: "10",
      likes_count: "100",
    },
  ];
const arr2 = await fetchDataFromUsersTable();
console.log("data: ", arr2);
const arr = [
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Loyce Kuvalis",
    timestamp: "16 December at 08:25",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    comments: "8",
    likes: "33",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Loyce Kuvalis",
    timestamp: "16 December at 08:25",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    comments: "8",
    likes: "33",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    author: "Loyce Kuvalis",
    timestamp: "16 December at 08:25",
    content:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
    comments: "8",
    likes: "33",
  },
];
export default function Me() {
  console.log("arr....", arr);
  return (
    <>
      <div className="flex w-100">
        <Sidebar />
        <div className="m-3 width-clac">
        <h1 className="font-bold">My Friends</h1>
          {friends.map((item) => {
            return (
              <>
                <div>
                  <FriendCard data={item} key={item.id} />
                </div>
              </>
            );
          })}
          <h1 className="font-bold">Posts</h1>
          {arr?.length &&
            arr?.map((item) => {
              return <Post data={item} key={item.id} />;
            })}
          <Footer />
        </div>
      </div>
    </>
  );
}
