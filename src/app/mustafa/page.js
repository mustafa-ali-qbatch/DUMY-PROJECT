import Image from "next/image";
import Navbar from "../navbar";
import Post from "../post";
const arr = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
export default function Mustafa() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      {arr.map((item) => {
        return <Post data={item} key={item.id}/>;
      })}

      <p>Mustafa Page</p>
      <div>Integrating Material UI In Next JS APP.</div>
    </main>
  );
}
