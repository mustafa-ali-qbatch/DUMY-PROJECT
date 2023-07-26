import Image from "next/image";
import Sidebar from "../sidebar";
import Post from "../post";
import Footer from "../footer";
import FriendCard from "../friend_card";
import { fetchPostsByUser, fetchFriends } from "../Helpers/index";
// const abc = await insertUers();
// const efg = await insertPosts();
const postUser = await fetchPostsByUser(1)
const userData = await fetchFriends("accepted", 1);
function formatArrayOfObjects(dataArray) {
  return dataArray.map((data) => {
    const formattedData = {}

    Object.entries(data).forEach(([key, value]) => {
      const keys = key.split('.')
      let currentObj = formattedData

      keys.forEach((nestedKey, index) => {
        if (index === keys.length - 1) {
          currentObj[nestedKey] = value
        } else {
          currentObj[nestedKey] = currentObj[nestedKey] || {}
          currentObj = currentObj[nestedKey]
        }
      })
    })

    return formattedData
  })
}

const data = formatArrayOfObjects(userData)
    
export default function Me() {
  return (
    <>
      <div className="flex w-100">
        <Sidebar />
        <div className="m-3 width-clac">
          <h1 className="font-bold">My Friends</h1>
          {data.length && data?.map((item) => {
            return (
              <>
                <div>
                  <FriendCard data={item?.Friends} key={item.id} isFriend={true} />
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
