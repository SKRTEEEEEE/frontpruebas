'use client';

import { ThirdwebNftMedia } from '@thirdweb-dev/react';
// import { NFT } from "@thirdweb-dev/sdk";
import styles from './Home.module.css';

export default function NFTCard({ nft, quantity }) {
  return (
    <div className={styles.nftCard}>
      <h2>Your NFT</h2>
      <ThirdwebNftMedia metadata={nft.metadata} width="100%" height="auto" />
      <div className={styles.nftCardContent}>
        <p>{nft.metadata.name}</p>
        <p>QTY: {quantity}</p>
      </div>
    </div>
  );
}
