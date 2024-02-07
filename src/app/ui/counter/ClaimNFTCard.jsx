'use client';
//Sin usar aun
import { useAddress, useContract, useOwnedNFTs } from '@thirdweb-dev/react';
// import styles from './free-req-nft/Home.module.css';
// import { MEMBERSHIP_NFT_ADDRESS } from '@/app/const/addresses';
// import NFTCard from './free-req-nft/NFTCard';

export default function ClaimNFTsExamp() {
  const address = useAddress();

  // Usamos el contract
  const { contract } = useContract(NFT_CONTRACT_ADDRESS);

  // Accedemos a la metadata
  const { data: contractNFTMetadata } = useContractMetadata(contract);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <div>
          {address && contractNFTMetadata ? (
            <div className={styles.nftClaim}>
              <MediaRenderer
                src={contractNFTMetadata.image}
                width="100%"
                height="auto"
                style={{
                  borderRadius: '20px',
                  maxWidth: '500px',
                }}
              />
              <Web3Button
                contractAddress={NFT_CONTRACT_ADDRESS}
                action={(contract) => contract.erc1155.claim(0, 1)}
                onSuccess={() => alert('Congrats, NFT Claimed!')}
              >
                Be lucky!
              </Web3Button>
            </div>
          ) : (
            <div className={styles.loginContainer}>
              <p>Starting to grow the new future...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
