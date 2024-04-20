"use client"
import React from 'react';
import Link from 'next/link';
import Window from "./components/Window";
import Toggle from "./components/Toggle";
import useStore from './state/store';
import './styles/page.css';

export default function Home() {
  return (
    <main>
      <div className="entrance-page">
        <Toggle />
        <div className="container">
          <Window />
        </div>
      </div>
      <div className="actions">
        <h1>Bem-vindo ao Sistema de Estacionamento Automático</h1>
        <Link href="/login">
          <a className="button">Login</a>
        </Link>
        <Link href="/register">
          <a className="button">Cadastro</a>
        </Link>
        <form className="search-form">
          <input type="text" placeholder="Digite a placa do veículo" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </main>
  );
}
