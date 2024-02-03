'use client';

// SEGUNDO ARCHIVO

import {
  metamaskWallet,
  ThirdwebProvider,
  coinbaseWallet,
  walletConnect,
} from '@thirdweb-dev/react';

export default function ThirdWebProviderWrapper({ children }) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true,
        }),
        coinbaseWallet(),
        walletConnect(),
      ]}
      clientId="0d9c103f07defb147154a7d2ccdc0196"
    >
      {children}
    </ThirdwebProvider>
  );
}
