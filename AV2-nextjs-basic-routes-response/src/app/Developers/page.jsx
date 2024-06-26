"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";



const Developers =() =>{
  return (
      <section className=" text-white grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 flex" id="developers">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

            <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 ">
                Developers
              </span>
            </h2>
            <Link href="/AboutJhonny">Jhonny Guimarães</Link>
            <br/>
            <Link href="/AboutAlbano">Lucas Albano</Link>
            <br/>
            <Link href="/AboutPrieto">Lucas Prieto</Link>
        </div>
      </div>
    </section>
      
    );
}
  export default Developers;