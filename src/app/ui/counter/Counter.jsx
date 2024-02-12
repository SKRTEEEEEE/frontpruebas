'use client';

import { STORAGE_CONTRACT_ADDRESS } from '@/app/const/addresses';
import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react';
import { useState } from 'react';

export default function Counter() {
  const address = useAddress();
  const { contract } = useContract(STORAGE_CONTRACT_ADDRESS);
  const [newValue, setNewValue] = useState(0);

  const { data: numValue, isLoading } = useContractRead(contract, 'retrieve');
  return (
    <div className="flex flex-col bg-neutral-600/20 p-12 rounded-md border-slate-800 border-2 gap-8">
      <h1 className="text-center text-xl font-black">
        {isLoading ? '0' : numValue?.toNumber()}
      </h1>
      <div className="flex flex-col">
        {address && (
          <>
            <input
              type="number"
              value={newValue}
              onChange={(e) => setNewValue(parseInt(e.target.value))}
              style={{
                marginBottom: '1rem',
                borderRadius: '0.5rem',
                border: '1px solid black',
                padding: '0.5rem',
              }}
            />
            <Web3Button
              contractAddress={STORAGE_CONTRACT_ADDRESS}
              action={(contract) => contract.call('store', [newValue])}
              onSubmit={() => setNewValue(0)}
              onSuccess={() => alert('Saved!')}
              onError={() => alert('Error!')}
            >
              Set New Value
            </Web3Button>
          </>
        )}
      </div>
    </div>
  );
}
