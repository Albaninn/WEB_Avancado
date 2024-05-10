import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";

const Footer = () => {
  return (
    <section className="text-white flex flex-col bg-[#121212]" id="footer">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
          <div className="container p-12 flex justify-between">
          <div className="socials flex flex-row">
            <Link href="#">
              <Image src={GithubIcon} alt="Github Icon" width={30}height={30}/>
            </Link>
          </div>
          <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Developed © 2024.
          </p>
          </div>
      </footer>
    </section>
  );
};

export default Footer;
