"use client";
import React, { useTransition, useState } from "react";

const Developers =() =>{
  return (
      <section className="text-white" id="developers">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

            <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 ">
                Developers
              </span>
           </h2>
        </div>
      </div>
    </section>
      
    );
}
  export default Developers;