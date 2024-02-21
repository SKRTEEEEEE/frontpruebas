import React from 'react';
import ConnectWalletButton from './ConnectWallet';
import Link from 'next/link';
import AdminDashbButton from './AdminDashbButton';

function Navbar() {
  return (
    <div>
      <div className="color-change-2x p-1 px-4 flex items-center sm:gap-8 justify-between">
        <div>
          Hola, esto es el navbar de un proyecto <Link href="/">web3</Link>
        </div>
        <div><Link href="/projects">03.2024</Link></div>
        <div className="flex sm:gap-8 items-center">
          <AdminDashbButton />
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
