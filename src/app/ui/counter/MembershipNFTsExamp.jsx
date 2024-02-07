'use client';

import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
// import styles from './free-req-nft/Home.module.css';
import { MEMBERSHIP_NFT_ADDRESS } from '@/app/const/addresses';
import NFTCard from './free-req-nft/NFTCard';

export default function MembershipNFTsExamp() {
  //Problemas con el ClientId
  const address = useAddress();

  const { contract } = useContract(MEMBERSHIP_NFT_ADDRESS);

  const { data: ownedNFTs, isLoading: ownedNFTsLoading } = useOwnedNFTs(
    contract,
    address
  );
  console.log('ownedNFTs', ownedNFTs, 'length', ownedNFTs.length);
  return (
    <div>
      <h1>Your membership NFTs in members page </h1>
      {ownedNFTsLoading ? (
        <p>Loading...</p>
      ) : ownedNFTs && ownedNFTs.length > 0 ? (
        ownedNFTs.map((nft) => {
          return (
            <NFTCard
              key={nft.metadata.id}
              nft={nft}
              quantity={parseInt(nft.quantityOwned)}
            />
          );
        })
      ) : (
        <p>No NFTs owned</p>
      )}
    </div>
  );
}
