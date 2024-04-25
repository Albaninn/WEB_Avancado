"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacharelado Sistemas de Informação</li>
        <li>Universidade Positivo 2022-2025</li>
        <br></br>
        <li>Análise e Desenvolvimento de Sistemas</li>
        <li>Pontificia Universidade Católica 2021-2022</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Sem certificações</li>
        {/*
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      */}
      </ul>
    ),
  },
];

const AboutPrieto = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:py-16" id="aboutprieto">
     
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 w-[250px] h-[250px] lg:w-[260px] lg:h-[360px] relative">
            <Image
              src="/"
              alt="hero image"
              className="rounded-full bg-[#121212] relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={240}
              height={300}
            />
          </div>
        <div className="mt-3 md:mt-0 text-base flex flex-col h-full">
          <h3 className="text-3xl font-bold text-white mb-4">Lucas Prieto Accorsi</h3>
          <p className="text-base lg:text-lg">
          Discente de Sistemas de Informação, atualmente no terceiro ano do curso. 
          Minha habilidade em aprender com facilidade 
          e minha resiliência diante de desafios têm fortalecido meu progresso no meus estudos, 
          estou sempre em busca de expandir meus conhecimentos e habilidades..
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Graduações{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default AboutPrieto;
