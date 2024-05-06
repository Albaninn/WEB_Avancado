"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const About: React.FC =() =>{
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <section className="text-white" id="about">
        
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 ">
              Sobre
            </span>
           </h2>
            
          <p className="text-base lg:text-lg">
            Olá, este é um site desenvolvido para a disciplina de Web Advanced na Universidade Positivo,
            para obtenção de nota de aprovação de tal matéria do Prof. Chrysthian Simeão.
          </p>
          <br/>
          
        </div>
        <Image src="/images/linguagem.png" width={500} height={500} alt="..."/>
      </div>
      
     
      </section>
      </div>
    );
}
export default About;