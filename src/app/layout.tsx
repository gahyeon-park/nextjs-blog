import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from "next/font/google";
import Layout from "@/components/Layout";

const sans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'This is Sweetpea\'s blog page.',
  description: 'Welcome to visit my blog.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={sans.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
