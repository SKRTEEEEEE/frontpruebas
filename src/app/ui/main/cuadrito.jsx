import React from 'react';
import ConnectWalletButton from './ConnectWallet';

function Cuadrito() {
  return (
    <div>
      <div className="color-change-2x p-1 px-4 flex items-center sm:gap-8 justify-between">
        Hola, esto es el navbar de un proyecto web3
        <ConnectWalletButton />
      </div>
    </div>
  );
}

export default Cuadrito;
