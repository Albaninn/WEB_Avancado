"use client"
import React from 'react';
import Toggle from "./components/Toggle";
import Window from "./components/Window";
import useStore from './state/store';
import './page.css'

export default function Home() {
  return (
    <main>
      <div className="entrance-page">
        <Toggle />

        <div className='container'>
          <Window />
          <Window />
        </div>
      </div>
    </main>
  )
}
