"use client";
import React, { useState } from "react";
import WhatsappIcon from "../../../public/icons8-whatsapp.svg";
import Link from "next/link";
import Image from "next/image";

const Contato = () => {

 
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 ">
              Contato
            </span>
           </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Atualmente estamos em busca de novas oportunidades, 
          nossas caixas de entrada estão sempre abertas. Se 
          você tiver alguma dúvida ou apenas quiser dizer oi, 
          faremos o possível para entrar em contato com você!
        </p>
        <br></br>
        <div className="socials flex flex-row gap-2">
          <Link href="https://api.whatsapp.com/send?phone=5541998252646">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
};

export default Contato;
