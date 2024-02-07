// import { Box } from '@chakra-ui/react';
import { FREE_REQ_NFT_ADDRESS } from '@/app/const/addresses';
import NFTsCardsExamp from '@/app/ui/main/nft-cards/NFTsCardsExamp';
// import ClaimNFTsCardExamp from '@/app/ui/main/nft-cards/ClaimNFTCard';

import { Text } from '@chakra-ui/react';

export default function freeRequestPage() {
  return (
    <main>
      <div className="flex justify-center items-center h-max">
        <div className="flex flex-col">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Free Request NFT
          </Text>
          <NFTsCardsExamp nftContractAddress={FREE_REQ_NFT_ADDRESS} />
        </div>
      </div>
    </main>
  );
}
