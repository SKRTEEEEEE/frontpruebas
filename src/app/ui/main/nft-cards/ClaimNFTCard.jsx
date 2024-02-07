'use client';
//Sin usar aun
import {
  MediaRenderer,
  Web3Button,
  useAddress,
  useContract,
  useContractMetadata,
} from '@thirdweb-dev/react';
import styles from './Home.module.css';
// import { MEMBERSHIP_NFT_ADDRESS } from '@/app/const/addresses';
// import NFTCard from './free-req-nft/NFTCard';

export default function ClaimNFTsCardExamp({ nftContractAddress }) {
  const address = useAddress();

  // Usamos el contract
  const { contract } = useContract(nftContractAddress);

  // Accedemos a la metadata
  const { data: contractNFTMetadata } = useContractMetadata(contract);
  console.log('nftContractAddress: ', nftContractAddress);

  return (
    <div className={styles.container}>
      <h1>Claim your free NFT</h1>
      <div>
        {address && contractNFTMetadata ? (
          <div className={styles.nftClaim}>
            <MediaRenderer
              src={contractNFTMetadata.image}
              width="100%"
              height="auto"
              style={{
                borderRadius: '20px',
                maxWidth: '300px',
              }}
            />
            <Web3Button
              contractAddress={nftContractAddress}
              action={(contract) => contract.erc1155.claim(0, 1)}
              onSuccess={() => alert('Congrats, NFT Claimed!')}
              onError={(err) => alert(`Failed to claim NFT: ${err}`)}
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
  );
}
