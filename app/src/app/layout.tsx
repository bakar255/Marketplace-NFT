'use client';

import "./globals.css";
import { Navbar } from "./components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{background: 'var(--background)'}}>
      <body>
         <div className=" min-w-lg mx-auto min-h-screen  bg-gradient-to-b to-[#1b1846]">
        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
