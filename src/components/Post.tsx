import Link from "next/link";
import Image from "next/image";
import { Tpost } from "@/service/posts";
import styles from "./post.module.css";

export default function Post(props: Tpost) {

  return (
    <Link href="/" className={`block w-full h-full p-3 rounded-md shadow-md overflow-hidden ${styles.post}`}>
      <div className={`-mt-3 -mx-3 ${styles.postImage}`}>
        <Image src={`/posts/${props.path}.png`} fill={true} alt={`${props.title} thumbnail image`} />
      </div>
      <h2 className="mt-3 font-bold">{props.title}</h2>
      <p className="mt-2">{props.description}</p>
      <span>{props.date}</span>
    </Link>
  )
}