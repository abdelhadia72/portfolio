/* eslint-disable */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abdelhadi Bousaadah Portfolio",
  description:
    "Welcome to the portfolio of Abdelhadi Bousaadah, showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-[url('/images/mouse-pointer-2.svg'),auto] [&_button]:cursor-[url('/images/pointer.svg'),pointer] [&_a]:cursor-[url('/images/pointer.svg'),pointer]`}
      >
        {children}
      </body>
    </html>
  );
}
