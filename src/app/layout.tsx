import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.JS Server Actions & UseOptimistic Hook",
  description: "Next.JS Server Actions & UseOptimistic Hook"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-slate-200 bg-zinc-900`}
      >
        {children}
      </body>
    </html>
  )
};