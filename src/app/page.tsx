import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <div className="block max-w-xs mx-auto overflow-hidden rounded-full">
        <Image src="/profile.jpg" width={400} height={400} alt="my profile image" />
      </div>
      <p className="mt-4">Hi, I&apos;m SweetPea.<br /> Good to meet you~!<br /> Welcome to my blog.</p>
      <Link href="/contact" className="inline-block bg-rose-300 mt-4 px-4 py-2 rounded-full font-semibold text-white hover:underline">Contact Me</Link>
    </main>
  )
}
