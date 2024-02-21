'use client';

import { GESTION_USUARIOS_ADDRESS } from '@/app/const/addresses';
import {
  Web3Button,
  useAccounts,
  useAddress,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react';
import { useState } from 'react';

export default function GestionUsuarios() {
  const address = useAddress();
  const { contract } = useContract(GESTION_USUARIOS_ADDRESS);
  const [newValue, setNewValue] = useState(0);

  //no puede leer los usuarios
    const { data: usuarios, isLoading } = useContractRead(contract, 'usuarios');
  console.log("usuarios", usuarios)
 
    return (
    <div className="flex flex-col bg-neutral-600/20 p-12 rounded-md border-slate-800 border-2 gap-8">
      <h1 className="text-center text-xl font-black">
        {isLoading ? '0' : usuarios}
      </h1>
      <div className="flex flex-col">
        {address && (
          <>
            <input
              type="string"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              style={{
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid black',
                padding: '0.5rem',
              }}
            />
            <Web3Button
              contractAddress={GESTION_USUARIOS_ADDRESS}
              action={(contract) => contract.call('asignarRolAdmin', [newValue])}
              onSubmit={() => setNewValue(0)}
              onSuccess={() => alert('Saved!')}
              onError={() => alert('Error!')}
            >
              Set New Admin
            </Web3Button>
          </>
        )}
      </div>
    </div>
  );
}

