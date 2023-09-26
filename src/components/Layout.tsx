import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.layout}>
      <header className={`flex justify-between items-center border-b ${styles.header}`}>
        <h1>
          <Link href="/" className="font-bold">SweetPea&apos;s Blog</Link>
        </h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <section>
        {children}
      </section>
    </div>
  )
}