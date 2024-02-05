'use client';
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import { RAFFLE_CONTRACT_ADDRESS } from '@/app/const/addresses';
import Link from 'next/link';

export default function AdminDashbButton() {
  const address = useAddress();

  const { contract } = useContract(RAFFLE_CONTRACT_ADDRESS);

  const { data: owner, isLoading: isLoadingOwner } = useContractRead(
    contract,
    'owner'
  );

  return (
    <div>
      {!isLoadingOwner && owner === address && (
        <Link href="/admin">Admin Dashboard</Link>
      )}
    </div>
  );
}
