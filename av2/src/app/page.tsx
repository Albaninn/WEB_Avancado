"use client"
import React from 'react';
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import './page.css'

export default function Home() {
  return (
    <main>
      <Toggle />

      <div className='container'>
        <Window />
        <Window />
      </div>
    </main>
  )
}