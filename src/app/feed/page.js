import Sidebar from "../sidebar";
import Post from "../post";
import Footer from "../footer";
import { fetchPosts } from "../Helpers/index.js";
const arr = await fetchPosts(1)
export default function Feed() {
  return (
    <>
      <div className="flex w-100">
        <Sidebar />
        <div className="m-3 width-clac">
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
