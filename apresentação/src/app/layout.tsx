"use client"
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import dynamic from 'next/dynamic';
import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';

const inter = Inter({subsets: ["latin"]});
const ThemeSwitcherWithNoSSR = dynamic(() => import('./components/ThemeSwitcher'), {
  ssr: false,
});

const metadata: Metadata = {
  title: "Profiles",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="pt-br">
       
      <body className={`${inter.className}`}>
        <header className="container flex justify-between mb-8">
        <nav className="fixed mx-auto border border-[#181a1f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
          <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
              <ThemeSwitcherWithNoSSR/>
              <span className="text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                Profiles
              </span>
              <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                <li>
                <button className="flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border-white">
                  <Link href="/About" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Sobre
                  </Link>
                </button>
                </li>
                <li>
                <button className="flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border-white">
                  <Link href="/Developers" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Developers
                  </Link>
                </button>
                </li>
                <li>
                <button className="flex items-center px-3 py-2  text-slate-200 hover:text-white hover:border-white">
                  <Link href="/Contato" className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    Contato
                  </Link>
                </button>
                </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </body>
    <main className="flex min-h-screen flex-col bg-[#121212]">{children}</main>
   </html>
  );
}