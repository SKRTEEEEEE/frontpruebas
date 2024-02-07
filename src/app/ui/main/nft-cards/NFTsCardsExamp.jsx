'use client';

import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
// import styles from './free-req-nft/Home.module.css';
// import { MEMBERSHIP_NFT_ADDRESS } from '@/app/const/addresses';
import NFTCard from './NFTCard';
import ClaimNFTsCardExamp from './ClaimNFTCard';

export default function NFTsCardsExamp({ nftContractAddress }) {
  /*Hay que tener en cuenta que cuando se mintea un NFT(ClaimNFTsCardExample),
  - el tokenId es asignado por defecto, y no por el usuario ni por el administrador,
    habria que hacer que en el panel de administrador, se pueda habilitar los diferentes TokenId a reclamar,
    para asi poder interactuar sin manipular el codigo
  - al igual que la billetera destino y la cantidad(1)(eso esta correcto)
  */
  const address = useAddress();

  const { contract } = useContract(nftContractAddress);

  const { data: ownedNFTs, isLoading: ownedNFTsLoading } = useOwnedNFTs(
    contract,
    address
  );
  console.log(
    'ownedNFTs',
    ownedNFTs,
    'length',
    ownedNFTs?.length,
    'address:',
    address,
    'nftContractAddress: ',
    nftContractAddress
  );
  return (
    <div>
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
        <ClaimNFTsCardExamp nftContractAddress={nftContractAddress} />
      )}
    </div>
  );
}
