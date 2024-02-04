'use client';

import {
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
} from '@thirdweb-dev/react';
import { useState } from 'react';

export default function Counter() {
  const CONTRACT_ADDRESS = '0x3a71fBa729c2d1b78194BED68c695DC92753896A';
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const [newValue, setNewValue] = useState(0);

  const { data: numValue, isLoading } = useContractRead(contract, 'retrieve');
  return (
    <div className="bg-neutral-600/20 p-12 rounded-md border-slate-800 border-2">
      <h1 className="text-center text-xl font-black py-8">
        {isLoading ? '0' : numValue.toNumber()}
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
              contractAddress={CONTRACT_ADDRESS}
              action={(contract) => contract.call('store', [newValue])}
            >
              Set New Value
            </Web3Button>
          </>
        )}
      </div>
    </div>
  );
}
