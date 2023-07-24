import Image from "next/image";
import Sidebar from "../sidebar";
import Post from "../post";
import Footer from "../footer";
import FriendCard from "../friend_card";
import { fetchPostsByUser, fetchFriends } from "../Helpers/index";
const postUser = await fetchPostsByUser(1)
const userData = await fetchFriends("pending", 1);


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
export default function Me() {
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
                  <FriendCard data={item} key={item.id} isFriend={true} />
                </div>
              </>
            );
          })}
          <h1 className="font-bold">Posts</h1>
          {postUser?.length &&
            postUser?.map((item) => {
              return <Post data={item} key={item.id} />;
            })}
          <Footer />
        </div>
      </div>
    </>
  );
}
