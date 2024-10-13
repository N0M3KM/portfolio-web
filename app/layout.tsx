import type { Metadata } from "next";
import { Open_Sans, Fredoka } from "next/font/google"
import Navbar from "./components/contents/Navbar"
import "./globals.css";

const openSans = Open_Sans({
  subsets : ['latin'],
  weight : ['400', '700', '800'],
  variable : '--open-sans-font'
})

const fredoka = Fredoka({
  subsets : ['latin'],
  weight : ['400', '600', '700'],
  variable : '--fredoka-font'
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${fredoka.variable} antialiased min-h-screen mx-auto`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
