'use client';

// import { Inter } from 'next/font/google';
import { MEMBERSHIP_NFT_ADDRESS } from '@/app/const/addresses';
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
// import ThirdWebProviderWrapper from './ui/ThirdWebProvider';
import { useRouter } from 'next/navigation';

// export const metadata = {
//   title: 'QUEEN420 members page',
//   description: 'Working in the benefits of our comunity',
// };

export default function ProtectedRoutesMembers({ children }) {
  const router = useRouter();
  const address = useAddress();
  const { contract } = useContract(MEMBERSHIP_NFT_ADDRESS);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);
  console.log(data?.length);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const hasDesiredNFT = data?.length > 0;

  if (hasDesiredNFT) {
    return <body>{children}</body>;
  } else {
    alert('You need to own a membership NFT to access this page');
    router.back();
    return null;
  }
}
