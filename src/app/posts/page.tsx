import PostsPage from "@/components/Posts";
import Link from "next/link";
import styles from "./posts.module.css";

export default async function Posts() {
  return (
    <div className="flex w-full">
      <PostsPage />
      <aside className={`w-20per pl-6 ${styles.category}`}>
        <span className="inline-block font-bold pb-2">Category</span>
        <Link href="">javascript</Link>
        <Link href="">backend</Link>
        <Link href="">node-basic</Link>
        <Link href="">my story</Link>
      </aside>
    </div>
  )
}