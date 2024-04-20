import React from 'react';

const RegisterPage = () => {
  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form className="register-form">
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Cadastrar</button>
      </form>
      {/* Restante do conteúdo da página */}
    </div>
  );
};

export default RegisterPage;
