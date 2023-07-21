import Image from "next/image";
import "../css/abc.css"
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
      <Sidebar />
      {arr.map((item) => {
        return (
          <>
            <div className="margin-left">
              <FriendCard data={item} key={item.id} />;
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
}
