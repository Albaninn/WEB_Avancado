import React from 'react';

const LoginPage = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="login-form">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
      {/* Restante do conteúdo da página */}
    </div>
  );
};

export default LoginPage;
