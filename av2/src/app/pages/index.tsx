import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Bem-vindo ao Sistema de Estacionamento Automático</h1>
      <div className="actions">
        <Link href="/login"><a className="button">Login</a></Link>
        <Link href="/register"><a className="button">Cadastro</a></Link>
        <form className="search-form">
          <input type="text" placeholder="Digite a placa do veículo" />
          <button type="submit">Buscar</button>
        </form>
      </div>
      {/* Restante do conteúdo da página */}
    </div>
  );
};

export default HomePage;
