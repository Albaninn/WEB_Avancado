import React from 'react';

const VehicleInfoPage = () => {
  return (
    <div className="container">
      <h2>Informações do Veículo</h2>
      <div className="vehicle-info">
        {/* Supondo que os dados do veículo serão carregados aqui */}
        <p>Placa: ABC-1234</p>
        <p>Modelo: Carro Modelo X</p>
        <p>Tempo de Estacionamento: 2 horas e 15 minutos</p>
        {/* Botão para ação, como pagamento ou extensão do tempo de estacionamento */}
        <button>Pagar Estacionamento</button>
      </div>
      {/* Restante do conteúdo da página */}
    </div>
  );
};

export default VehicleInfoPage;
