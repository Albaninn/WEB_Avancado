"use client";
import React, { useState } from "react";


const Contato = () => {

 
  return (
    <section className="text-white" id="contato">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 ">
              Contato
            </span>
           </h2>
            
          <p className="text-base lg:text-lg">
            Atualmente estamos em busca de novas oportunidades, 
            nossas caixas de entrada estão sempre abertas. Se 
            você tiver alguma dúvida ou apenas quiser dizer oi, 
            faremos o possível para entrar em contato com você!
          </p>
          <br/>
          <form className="flex flex-col">
            
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Seu email
              </label>
              <input 
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="endereço@provedor.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="name" className="text-white block text-sm mb-2 font-medium">
                Seu nome
              </label>
              <input
                name="name"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Escreva seu Nome"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Menssagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Escreva sua mensagem"
              />
            </div>
            <button 
              type="submit" 
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Enviar Messagem
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
    
  );
};

export default Contato;
