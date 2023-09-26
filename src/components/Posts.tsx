import { getPosts } from "@/service/posts";
import Post from "./Post";

export default async function PostsPage() {
  const data = await getPosts();

  return (
    <div className="w-full">
      <ul className="flex flex-wrap">
        {data.map((item, idx) =>
          <li key={idx} className="basis-1/3 p-2">
            <Post {...item}></Post>
          </li>
        )}
      </ul>
    </div>
  )
}