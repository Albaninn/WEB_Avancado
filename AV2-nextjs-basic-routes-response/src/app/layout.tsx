import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Profiles",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>){

  return (
    <html lang="pt-br">
       
      <body className={`${inter.className}`}>
        <header className="container flex justify-between mb-8">
        <Navbar />
        </header>
    </body>
    <main className="flex min-h-screen flex-col bg-[#121212]">{children}</main>
    <Footer/>
   </html>
  );
}