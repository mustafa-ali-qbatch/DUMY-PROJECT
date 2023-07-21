import Image from "next/image";
import "../css/app.css";
import Sidebar from "../sidebar";
import FriendCard from "../friend_card";
import Footer from "../footer";
const arr = [
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
export default function Friends() {
  return (
    <>
      <div className="flex w-100">
        <Sidebar />
        <div className="m-3 width-clac">
          <h1 className="font-bold">Add Friends</h1>
          {arr.map((item) => {
            return (
              <>
                <div>
                  <FriendCard data={item} key={item.id} />
                </div>
              </>
            );
          })}
          <h1 className="font-bold">Pending Request</h1>
          {arr.map((item) => {
            return (
              <>
                <div>
                  <FriendCard data={item} key={item.id} />
                </div>
              </>
            );
          })}
          <Footer />
        </div>
      </div>
    </>
  );
}
